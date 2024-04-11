import { redirect } from "next/navigation";
import React from "react";
import { MainDashboard } from "~/components/dashboard/main";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
const Page = async () => {
  const session = await getServerAuthSession();

  const subscriptionData = await api.user.getSubscriptionInfo();
  const results = await api.user.subscriptions();
  // const subscriptionData = await api.user.subscriptionStatus();
  // console.log("subscriptionData", subscriptionData);

  const subscriptions = results.flatMap(
    (subscription) => subscription.subscriptions,
  );

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <MainDashboard
        subscriptionData={subscriptionData}
        subscriptions={subscriptions}
      />
    </div>
  );
};

export default Page;
