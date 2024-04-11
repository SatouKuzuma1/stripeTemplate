"use client";

import { api } from "~/trpc/react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

const ManageBillingButton = () => {
  const { mutateAsync: createBillingPortalSession } =
    api.stripe.createBillingPortalSession.useMutation({
      onSuccess() {
        router.refresh();
      },
    });
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        const { billingPortalUrl } = await createBillingPortalSession();
        if (billingPortalUrl) {
          router.push(billingPortalUrl);
        }
      }}
    >
      Manage
    </DropdownMenuItem>
  );
};

export default ManageBillingButton;
