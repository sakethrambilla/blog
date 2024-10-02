import { Problem } from "@/types/problem.type";

type ProblemType = Omit<Problem, "id">;
const initalProblem: ProblemType = {
  title: "",
  slug: "",
  link: "",
  content: "",
  difficulty_level: "string",
  publish: false,
  category: [],
};

class ProblemStore {
  problem: ProblemType = initalProblem;
}

const problemStore = new ProblemStore();
export default problemStore;
