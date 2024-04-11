import { type NextPage } from "next";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

import SubscriptionCard from "./subscription-card";

const SubscriptionMain: NextPage = async () => {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <>
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-0">
          <div className="mt-0 flex flex-col items-center justify-center gap-4">
            <SubscriptionCard />
            <div className="mt-8"></div>
          </div>
        </main>
      </>
    );
  }
  const subscriptionStatus = await api.user.subscriptionStatus();

  return (
    <>
      <main className="container mx-auto mt-4 flex flex-col items-center justify-center p-4">
        <div className=" flex flex-col items-center justify-center gap-4">
          <SubscriptionCard />
          {/* <SubscriptionStatus /> */}
          {subscriptionStatus && (
            <div className="mt-8">
              {/* <p className="text-xl ">
                Your subscription is {subscriptionStatus}.
              </p> */}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default SubscriptionMain;
