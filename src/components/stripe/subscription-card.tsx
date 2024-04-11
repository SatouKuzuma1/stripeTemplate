import React from "react";
import UpgradeButton from "../buttons/upgrade-button";
import { CheckIcon } from "@radix-ui/react-icons";
import { Badge } from "../ui/badge";
import Link from "next/link";

import UpgradeOrSignInButton from "../buttons/upgrade-or-sign-in-button";

const features = {};

const SubscriptionCard = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-2xl  sm:text-4xl ">Pricing</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-xl ">
          Get started on our free plan and upgrade when you are ready.
        </p>
      </div>
      <div className="container mt-20 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
        <div className="relative flex  flex-col rounded-2xl border p-8 ">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Free</h3>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">$0</span>
              <span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p className="mt-6 ">You just want to discover</p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
                <CheckIcon />

                <span className="ml-3 ">10 Credits</span>
              </li>
              <li className="flex">
                <CheckIcon />

                <span className="ml-3 ">Generate video (2 credits)</span>
              </li>
              <li className="flex">
                <CheckIcon />
                <span className="ml-3 ">Quizz (1 credits) </span>
              </li>
            </ul>
          </div>
          {/* <Link
            className="mt-8   inline-flex w-full   items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-6 py-2 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 dark:focus-visible:ring-zinc-300"
            href="/auth/login"
          >
            Signup for free
          </Link> */}
        </div>
        <div className="relative flex  flex-col rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Full access</h3>
            <Badge className="absolute top-0 -translate-y-1/2 transform   rounded-full px-4 py-1.5 text-xs font-semibold  uppercase tracking-wide">
              Most popular
            </Badge>

            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">
                $50
              </span>
              <span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p className="mt-6 ">
              You want to learn and have a personal assistant
            </p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
                <CheckIcon />
                <span className="ml-3 ">30 credits</span>
              </li>
              <li className="flex">
                <CheckIcon />
                <span className="ml-3 ">Powered by GPT-4 (more accurate)</span>
              </li>
              <li className="flex">
                <CheckIcon />
                <span className="ml-3 ">Generate video (2 credits)</span>
              </li>
              <li className="flex">
                <CheckIcon />
                <span className="ml-3 ">Quizz (1 credits) </span>
              </li>
              <li className="flex">
                <CheckIcon />
                <span className="ml-3 ">Analytics on the quizz</span>
              </li>
            </ul>
          </div>

          <UpgradeOrSignInButton />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
