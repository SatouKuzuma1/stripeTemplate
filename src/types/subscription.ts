import { type RouterOutputs } from "~/trpc/shared";
import { type Subscription } from "@prisma/client";

export type SubscriptionDataType = {
  subscriptionData: RouterOutputs["user"]["getSubscriptionInfo"];
  subscriptions: Subscription[];
};
