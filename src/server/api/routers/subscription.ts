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

export const subsciptionRouter = createTRPCRouter({
  activeSubscriptions: protectedProcedure.query(async ({ ctx }) => {
    const { session, db } = ctx;

    if (!session.user?.id) {
      throw new Error("Not authenticated");
    }

    const data = await db.subscription.findMany({
      where: {
        userId: session?.user?.id,
        status: {
          in: activeStripeSubscribtionStatuses,
        },
      },
    });

    return data;
  }),
  subscriptionStatus: protectedProcedure.query(async ({ ctx }) => {
    const { session, db } = ctx;

    if (!session.user?.id) {
      throw new Error("Not authenticated");
    }

    const data = await db.subscription.findFirst({
      where: {
        userId: session.user?.id,
        status: {
          in: activeStripeSubscribtionStatuses,
        },
      },
    });

    if (!data?.status) return {};

    return {
      active: data.status === "active",
      status: data.status,
    };
  }),
});
