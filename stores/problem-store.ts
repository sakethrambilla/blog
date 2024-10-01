import { DsaProblem } from "@/types/dsa-problem.type";

type Problem = Omit<DsaProblem, "id">;
const initalProblem: Problem = {
  title: "",
  slug: "",
  link: "",
  content: "",
  difficulty_level: "string",
  publish: false,
  category: [],
};

class ProblemStore {
  problem: Problem = initalProblem;
}

const problemStore = new ProblemStore();
export default problemStore;
