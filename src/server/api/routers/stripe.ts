import { z } from "zod";
import { env } from "~/env";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { getOrCreateStripeCustomerIdForUser } from "../stripe/stripe-webhook-handlers";

export const stripeRouter = createTRPCRouter({
  products: publicProcedure
    .input(z.object({ priceId: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      const { db } = ctx;

      const data = await db.product.findMany({
        where: {
          active: true,
          prices: { some: {} },
        },
        include: {
          prices: {
            where: {
              active: true,
            },
          },
        },
      });

      if (!data) {
        throw new Error("Could not find products");
      }

      return data;
    }),
  createCheckoutSession: protectedProcedure.mutation(async ({ ctx }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const customerId = await getOrCreateStripeCustomerIdForUser({
      db: ctx.db,
      stripe: ctx.stripe,
      userId: ctx.session.user.id,
    });

    if (!customerId) {
      throw new Error("Could not create customer id");
    }
    // const price = await ctx.db.price.findUnique({
    //   where: { id: input?.priceId },
    // });
    // if (!price) {
    //   throw new Error("Could not find price");
    // }

    const baseUrl =
      env.NODE_ENV === "development"
        ? `http://${"localhost:3000"}`
        : `https://${env.NEXTAUTH_URL}`;

    const checkoutSession = await ctx.stripe.checkout.sessions.create({
      customer: customerId,
      client_reference_id: ctx.session.user.id,
      payment_method_types: ["paypal"],
      mode: "subscription",
      line_items: [
        {
          price: env.STRIPE_PRICE_ID,
          // price: input.pirceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/dashboard?checkoutSuccess=true`,
      cancel_url: `${baseUrl}/dashboard?checkoutCanceled=true`,
      subscription_data: {
        metadata: {
          userId: ctx.session.user.id,
        },
      },
    });
    if (!checkoutSession) {
      throw new Error("Could not create checkout session");
    }
    return { checkoutUrl: checkoutSession.url };
  }),
  createBillingPortalSession: protectedProcedure.mutation(async ({ ctx }) => {
    const { stripe, session, db } = ctx;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const customerId = await getOrCreateStripeCustomerIdForUser({
      db,
      stripe,
      userId: session.user?.id,
    });

    if (!customerId) {
      throw new Error("Could not create customer");
    }
    const baseUrl =
      env.NODE_ENV === "development"
        ? `http://${"localhost:3000"}`
        : `https://${env.NEXTAUTH_URL}`;

    const stripeBillingPortalSession =
      await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${baseUrl}/dashboard`,
      });
    if (!stripeBillingPortalSession) {
      throw new Error("Could not create billing portal session");
    }

    return { billingPortalUrl: stripeBillingPortalSession.url };
  }),
});
