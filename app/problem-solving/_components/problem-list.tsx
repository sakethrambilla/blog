import { Problem, ProblemListType } from "@/types/problem.type";
import React from "react";
import ProblemCard from "./problem-card";

interface ProblemListProps {
  data: ProblemListType[];
}

const ProblemList = ({ data }: ProblemListProps) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-2">
      {data.map((problem, key) => (
        <ProblemCard problem={problem} key={key} index={key} />
      ))}
    </div>
  );
};

export default ProblemList;
