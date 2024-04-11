import { z } from "zod";
import { env } from "~/env";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx;

    const data = await db.product.findMany({
      where: {
        active: true,
        prices: { some: {} },
      },
      include: {
        prices: {},
      },
    });

    if (!data) {
      throw new Error("Could not find products");
    }

    return data;
  }),
});
