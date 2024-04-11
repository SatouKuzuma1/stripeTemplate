"use client";
import { api } from "~/trpc/react";
import ManageBillingButton from "./manage-billing-button";
import { type RouterOutputs } from "~/trpc/shared";
import { type Session } from "next-auth";

type SubscriptionStatusProps = {
  status: RouterOutputs["subscription"]["subscriptionStatus"]["status"];
  active: RouterOutputs["subscription"]["subscriptionStatus"]["active"];
};

const SubscriptionStatus = ({ session }: { session: Session | null }) => {
  const { data: subscriptionStatus, isLoading } =
    api.subscription.subscriptionStatus.useQuery();

  // if (session && isLoading) {
  //   return <p>Subscription Status Loading...</p>;
  // }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 rounded border border-dotted  p-5">
        <p>Subscription Active:</p>
        <p>{subscriptionStatus?.active ? "✅" : "❌"}</p>
        <p>Subscription Status:</p>
        <p>{subscriptionStatus?.status}</p>
        <p></p>
        <p>{subscriptionStatus?.active && <ManageBillingButton />}</p>
      </div>
    </>
  );
};

export default SubscriptionStatus;
