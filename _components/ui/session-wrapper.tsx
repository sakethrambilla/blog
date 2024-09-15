"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionWrapper {
  children: ReactNode;
}
function SessionWrapper({ children }: SessionWrapper) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionWrapper;
