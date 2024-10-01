"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

function GoogleLogin() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      className="flex w-full items-center justify-center gap-4 rounded-xl border p-2 text-xl lg:w-2/3"
    >
      <FcGoogle size={30} />
      <p>Continue with Google</p>
    </button>
  );
}

export default GoogleLogin;
