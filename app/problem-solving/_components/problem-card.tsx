import { ProblemListType } from "@/types/problem.type";
import Link from "next/link";
import React from "react";

interface ProblemCardProp {
  problem: ProblemListType;
  index: number;
}

const ProblemCard = ({ problem, index }: ProblemCardProp) => {
  return (
    <Link
      href={`/problem-solving/${problem.slug}`}
      className="flex w-full items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <p>{index + 1}</p>
        <h3>{problem.title}</h3>
      </div>
      <div className="flex items-center gap-4">
        <p>{problem.difficulty_level}</p>
        <p>{problem.category.slug}</p>
      </div>
    </Link>
  );
};

export default ProblemCard;
