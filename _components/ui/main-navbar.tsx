"use client";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";
const ThemeToggle = dynamic(() => import("./theme-toggle"), { ssr: false });

function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="hidden w-full items-center justify-between p-8 lg:flex">
        <Link href={"/"} className="font-semibold">
          Blog
        </Link>

        <div className="flex items-center gap-6">
          <Link href={"/"}>DSA</Link>
          <Link href={"/"}>Web Dev</Link>
          <Link href={"/"}>Login</Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-end gap-24 p-8 lg:hidden">
        <div className="flex gap-4">
          <ThemeToggle />
          <div className="" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {menuOpen && (
          <div className="flex w-full flex-col gap-12 text-4xl">
            <Link href={"/"}>DSA</Link>
            <Link href={"/"}>Web Dev</Link>
            <Link href={"/"}>Login</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default MainNavbar;
