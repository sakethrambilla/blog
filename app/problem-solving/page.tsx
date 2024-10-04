import { getAllProblems } from "@/actions/problem";
import MainLayout from "@/layout/main-layout";
import React from "react";
import SearchProblem from "./_components/search-problem";
import ProblemList from "./_components/problem-list";

const Page = async () => {
  const data = await getAllProblems();
  if (!data.data) return <></>;
  // if (data.data) {
  return (
    <MainLayout>
      <div className="flex h-full w-full flex-col items-start justify-center p-24">
        <div className="flex flex-col items-start justify-start gap-4 py-8">
          <h1 className="text-6xl text-primary">Problem Solving</h1>
          <p>Find all the problems based on topic and difficulty</p>
        </div>

        {/* Search Functionality */}
        <SearchProblem />

        {/* Problems serach result wise */}
        <ProblemList data={data.data} />
      </div>
    </MainLayout>
  );
};
// };

export default Page;
