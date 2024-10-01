"use client";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle"), {
  ssr: false,
});
function DashboardNavbar() {
  return (
    <div className="flex w-full items-center justify-end gap-4 p-8">
      <Button
        variant={"secondary"}
        className="rounded"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Logout
      </Button>
      <ThemeToggle />
    </div>
  );
}

export default DashboardNavbar;
