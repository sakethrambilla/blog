export type Problem = {
  id: string;
  title: string;
  slug: string;
  link: string;
  content: string;
  difficulty_level: string;
  publish: boolean;
  category: string[];
};
export type ProblemCategory = {
  id: string;
  name: string;
  slug: string;
  problems: string[];
};

export type ProblemListType = {
  title: string;
  slug: string;
  difficulty_level: string;
  category: { slug: string; name: string }[];
};
