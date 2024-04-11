import { env } from "~/env";

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  stripePriceId: string;
  price: number;
}

export const subscriptionPlan: SubscriptionPlan[] = [
  {
    id: "prod_PrdqpQkjhYCcxf",
    name: "Premium",
    description: "Our premium plan for premium clients",
    stripePriceId: env.STRIPE_PRICE_ID,

    price: 15,
  },
  {
    id: "prod_PrdqpQkjhYCcxf",
    name: "Premium",
    description: "Our premium plan for premium clients",
    stripePriceId: env.STRIPE_PRICE_ID,

    price: 15,
  },
];

export const priceIdOne = env.STRIPE_PRICE_ID;
