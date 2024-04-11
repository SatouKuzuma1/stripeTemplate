import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

type StripeSubscriptionStatus = "active" | "trialing" | "past_due" | "unpaid";

export const activeStripeSubscribtionStatuses: StripeSubscriptionStatus[] = [
  "active",
  "trialing",
  "past_due",
  "unpaid",
];

export const userRouter = createTRPCRouter({
  subscriptionStatus: protectedProcedure.query(async ({ ctx }) => {
    const { session, db } = ctx;

    if (!session.user?.id) {
      throw new Error("Not authenticated");
    }

    const data = await db.user.findUnique({
      where: {
        id: session.user?.id,
      },
      select: {
        stripeSubscriptionStatus: true,
      },
    });

    if (!data) {
      throw new Error("Could not find user");
    }

    return data.stripeSubscriptionStatus;
  }),
  getSubscriptionInfo: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findUnique({
      where: {
        id: ctx.session.user?.id,
      },
    });
  }),
  subscriptions: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findMany({
      where: { id: ctx.session.user.id },
      select: {
        subscriptions: true,
      },
    });
  }),
});
