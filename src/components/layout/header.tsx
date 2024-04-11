import React from "react";

// import { ModeToggle } from "../ui/theme-switch";

import { getServerAuthSession } from "~/server/auth";
import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";
import { Navbar } from "./navbar";

export async function Header() {
  noStore();
  const session = await getServerAuthSession();

  return (
    <nav className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full  backdrop-blur">
      {/* <div className="container flex h-14 max-w-screen-2xl items-center"> */}

      <Navbar session={session} />

      {/* <ModeToggle /> */}
    </nav>
  );
}
