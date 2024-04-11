import { type PrismaClient } from "@prisma/client";
import { type Session } from "next-auth";
import type Stripe from "stripe";
import { env } from "~/env";
import { getServerAuthSession } from "~/server/auth";

const premiumPrice = 15;

// retrieves a Stripe customer id for a given user if it exists or creates a new one
export const getOrCreateStripeCustomerIdForUser = async ({
  stripe,
  db,
  userId,
}: {
  stripe: Stripe;
  db: PrismaClient;
  userId: string;
}) => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) throw new Error("User not found");

  if (user.stripeCustomerId) {
    return user.stripeCustomerId;
  }

  //   create a new customer
  const customer = await stripe.customers.create({
    email: user.email ?? undefined,
    name: user.name ?? undefined,
    // use metadata to link this Stripe customer to internal user id
    metadata: {
      userId,
    },
  });

  // update with new customer id
  const updatedUser = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      stripeCustomerId: customer.id,
    },
  });

  if (updatedUser.stripeCustomerId) {
    return updatedUser.stripeCustomerId;
  }
};

export const handleInvoicePaid = async ({
  event,
  stripe,
  db,
}: {
  event: Stripe.Event;
  stripe: Stripe;
  db: PrismaClient;
}) => {
  const invoice = event.data.object as Stripe.Invoice;
  const subscriptionId = invoice.subscription;
  const subscription = await stripe.subscriptions.retrieve(
    subscriptionId as string,
  );
  const userId = subscription.metadata.userId;

  // update user with subscription data
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      stripeSubscriptionId: subscription.id,
      stripeSubscriptionStatus: subscription.status,
    },
  });
};

// export const handleSubscriptionCreatedOrUpdated = async ({
//   event,
//   db,
//   stripe,
// }: {
//   event: Stripe.Event;
//   db: PrismaClient;
//   stripe: Stripe;
// }) => {
//   const subscription = event.data.object as Stripe.Subscription;
//   const userId = subscription.metadata.userId;

//   // const price = await stripe.prices.retrieve(env.STRIPE_PRICE_ID);
//   // update user with subscription data

//   // console.log("price", price.unit_amount);

//   await db.user.update({
//     where: {
//       id: userId,
//     },
//     data: {
//       stripeSubscriptionId: subscription.id,
//       stripeSubscriptionStatus: subscription.status,
//       stripeCurrentPeriodStarted: new Date(subscription.created * 1000),
//       stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
//     },
//   });
// };

export const handleSubscriptionCreatedOrUpdated = async ({
  event,
  db,
  stripe,
}: {
  event: Stripe.Event;
  db: PrismaClient;
  stripe: Stripe;
}) => {
  const subscription = event.data.object as Stripe.Subscription;
  const userId = subscription.metadata.userId;
  const price = subscription.items.data[0]?.price;
  // const subscriptions = await stripe.subscriptions.list({ limit: 1 });
  const amount = subscription.items.data[0]?.price.unit_amount;
  subscription.items.data[0]?.plan.nickname

  if (!price) {
    console.log("👉 Price not found", subscription.items.data[0]);
    return;
  }

  const productId = price?.product;
  if (!productId) {
    console.log("👉 Product not found", price);
    return;
  }

  try {
    await db.subscription.upsert({
      where: {
        id: subscription.id,
      },
      create: {
        id: String(subscription.id),
        user: { connect: { id: String(userId) } },
        status: subscription.status,
        // product: { connect: { id: String(productId) } },
        // productId:  String(productId),
        metadata: subscription.metadata,
        // priceId: price?.id,
        price: amount / 100 ?? premiumPrice,
        currentPeriodEnd: new Date(subscription.created * 1000),
      },
      update: {
        status: subscription.status,
        // productId: String(productId),
        metadata: subscription.metadata,
        price: amount / 100 ?? premiumPrice,
        ended_at: new Date(subscription.ended_at * 1000) ?? new Date(),
      },
    });
  } catch (error) {
    console.log("👉 subscription.upsert error", error);
  }

  // update user with subscription data
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      stripeSubscriptionId: subscription.id,
      stripeSubscriptionStatus: subscription.status,
    },
  });
};

export const handleSubscriptionCanceled = async ({
  event,
  db,
}: {
  event: Stripe.Event;
  db: PrismaClient;
}) => {
  const subscription = event.data.object as Stripe.Subscription;
  const userId = subscription.metadata.userId;

  // remove subscription data from user
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      stripeSubscriptionId: null,
      stripeSubscriptionStatus: null,
    },
  });
};

export const handlePriceDeleted = async ({
  event,
  db,
}: {
  event: Stripe.Event;
  db: PrismaClient;
}) => {
  const price = event.data.object as Stripe.Price;
  try {
    await db.price.delete({
      where: {
        id: price.id,
      },
    });
  } catch (error) {
    console.log("👉 price.delete error", error);
  }
};

export const handleProductDeleted = async ({
  event,
  db,
}: {
  event: Stripe.Event;
  db: PrismaClient;
}) => {
  const product = event.data.object as Stripe.Product;
  // delete a product in your database
  try {
    await db.product.delete({
      where: {
        id: product.id,
      },
    });
  } catch (error) {
    console.log("👉 product.delete error", error);
  }
};

export const handleProductCreatedOrUpdated = async ({
  event,
  db,
}: {
  event: Stripe.Event;
  db: PrismaClient;
}) => {
  const product = event.data.object as Stripe.Product;

  const productAttributes = {
    name: product.name,
    description: product.description ? product.description : "",
    active: product.active,
    image: product.images[0] ? product.images[0] : "",
    metadata: product.metadata,
  };

  // create or update a product in your database
  try {
    await db.product.upsert({
      where: {
        id: product.id,
      },
      create: {
        id: product.id,
        ...productAttributes,
      },
      update: productAttributes,
    });
  } catch (error) {
    console.log("👉 product.upsert error", error);
  }
};

export const handlePriceCreatedOrUpdated = async ({
  event,
  db,
}: {
  event: Stripe.Event;
  db: PrismaClient;
}) => {
  const price = event.data.object as Stripe.Price;

  const product = await db.product.findUnique({
    where: {
      id: String(price.product),
    },
  });

  if (!product) {
    console.log("👉 Product not found", price.product);
    return;
  }

  // create or update a price in your database
  try {
    await db.price.upsert({
      where: {
        id: price.id,
      },
      create: {
        id: price.id,
        active: price.active,
        currency: price.currency,
        interval: price.recurring?.interval || "",
        intervalCount: price.recurring?.interval_count || 0,
        trialPeriodDays: price.recurring?.trial_period_days || 0,
        metadata: price.metadata,
        nickname: price.nickname,
        productId: product.id,
        unitAmount: price.unit_amount || 0,
        type: price.type,
      },
      update: {
        active: price.active,
        currency: price.currency,
        interval: price.recurring?.interval,
        intervalCount: price.recurring?.interval_count,
        trialPeriodDays: price.recurring?.trial_period_days || 0,
        metadata: price.metadata,
        nickname: price.nickname,
        productId: product.id,
        unitAmount: price.unit_amount || 0,
        type: price.type,
      },
    });
  } catch (error) {
    console.log("👉 price.upsert error", error);
  }
};
