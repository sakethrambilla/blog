import GoogleLogin from "@/components/google-login";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-12 p-8 lg:flex-row lg:justify-center">
      <Image
        src={
          "https://images.unsplash.com/photo-1619446208587-7e3881731ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D"
        }
        alt="login image "
        width={100}
        height={100}
        className="h-[30vh] w-full rounded-2xl object-cover lg:h-full lg:w-fit"
        priority
        unoptimized
      />

      <div className="flex h-fit w-1/3 flex-col items-center justify-center gap-12">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <GoogleLogin />
      </div>
    </div>
  );
}

export default page;
