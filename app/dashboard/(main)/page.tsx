import DashboardLayout from "@/layout/dashboard-layout";
import React from "react";
import AddCard from "./_components/add-card";

function page() {
  return (
    <DashboardLayout>
      <div className="flex h-full min-h-screen w-full flex-col items-start justify-start gap-12 px-12 py-4">
        <h1 className="text-5xl lg:text-6xl">Dashboard</h1>
        <div className="flex h-full w-full flex-wrap items-start justify-start gap-6 lg:gap-12">
          <AddCard
            title="Add a new thread post"
            redirectUrl="/dashboard/new-thread-post"
          />
          <AddCard title="Add a new post" redirectUrl="/dashboard/new-post" />
          <AddCard
            title="Add a new DSA problem"
            redirectUrl="/dashboard/new-dsa-problem"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default page;
