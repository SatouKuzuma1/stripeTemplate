"use client";
import { api } from "~/trpc/react";

import { type Session } from "next-auth";
import { type Subscription } from "@prisma/client";
import UpgradeOrSignInButton from "../buttons/upgrade-or-sign-in-button";
import { type RouterOutputs } from "~/trpc/shared";

type ProductProps = {
  session: Session | null;
  products: RouterOutputs["products"]["all"][];
  result: RouterOutputs["user"]["activeSubscriptions"][];
};

export const Products = ({ session }: { session: Session | null }) => {
  const { data: products, isLoading } = api.products.all.useQuery();
  // const session = useSession();
  //   const session = await getServerAuthSession()

  let activeSubscriptions: Subscription[] = [];
  let isLoadingActiveSubscriptions = false;

  if (session) {
    const result = api.user.activeSubscriptions.useQuery();
    activeSubscriptions = result.data ?? [];
    isLoadingActiveSubscriptions = result.isLoading;
  }

  if (isLoading || isLoadingActiveSubscriptions) {
    return <></>;
  }

  return (
    <div>
      <p className="text-2xl text-gray-700">Products:</p>
      <div className="mt-3 flex items-center justify-center gap-4">
        {products?.map((product) =>
          product.prices.map((price) => (
            <div
              key={price.id}
              className="max-w-xs overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800"
            >
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold uppercase ">{product.name}</h1>
                <p className="mt-1 text-sm ">{product.description}</p>
              </div>
              <div className="space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0">
                <div className="flex h-48 w-full items-center justify-center rounded  sm:w-96">
                  <svg
                    className="h-12 w-12 "
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-2">
                <h1 className="text-lg font-bold ">
                  $
                  {!isLoading && price.unitAmount
                    ? Number(price.unitAmount) / 100
                    : 0}
                  /{price.interval}
                </h1>
                {!isLoading &&
                  activeSubscriptions?.some((subscription) => {
                    return subscription.priceId === price.id;
                  }) &&
                  "✅"}

                {!isLoading && activeSubscriptions.length === 0 && (
                  <UpgradeOrSignInButton priceId={price.id ? price.id : ""} />
                )}
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
};
