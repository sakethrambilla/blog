"use client";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
const ThemeToggle = dynamic(() => import("./theme-toggle"), { ssr: false });

function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      {/* Desktop  */}
      <div className="absolute top-0 hidden w-full items-center justify-between p-8 lg:flex">
        <Link href={"/"} className="font-semibold">
          Blog
        </Link>

        <div className="flex items-center gap-6">
          <Link href={"/"}>DSA</Link>
          <Link href={"/"}>Web Dev</Link>
          {status === "authenticated" ? (
            <Link href={"/dashboard"}> Dashboard</Link>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
          <ThemeToggle />
        </div>
      </div>

      {/* Navbar Mobile */}
      <div className="absolute top-0 flex h-fit w-full flex-col items-end gap-24 bg-background p-8 lg:hidden">
        <div className="flex gap-4">
          <ThemeToggle />
          <div className="" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {menuOpen && (
          <div className="flex h-full w-full flex-col gap-12 text-4xl">
            <Link href={"/"}>DSA</Link>
            <Link href={"/"}>Web Dev</Link>
            {status === "authenticated" ? (
              <Link href={"/dashboard"}> Dashboard</Link>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default MainNavbar;
