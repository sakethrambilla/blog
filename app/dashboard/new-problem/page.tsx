import DashboardLayout from "@/layout/dashboard-layout";
import React from "react";
import ProblemDetailsForm from "./_components/problem-details-form";

const NewProblem = () => {
  return (
    <DashboardLayout>
      <div className="flex h-full w-full flex-col items-start justify-start gap-12 px-12 py-4">
        <h1 className="text-4xl">DSA Problem Solving</h1>
        <ProblemDetailsForm />
      </div>
    </DashboardLayout>
  );
};

export default NewProblem;
