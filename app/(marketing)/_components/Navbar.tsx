"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useConvexAuth } from "convex/react";
// import { SignInButton } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end jjustify-between w-full flex items-center gap-x-2">
        Login
        {isLoading && <p>Loading..</p>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Notion Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm">
              <Link href="/documents">Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
