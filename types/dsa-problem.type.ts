export type DsaProblem = {
  id: string;
  title: string;
  slug: string;
  link: string;
  content: string;
  difficulty_level: string;
  publish: boolean;
  category: string[];
};
export type DsaProblemCategory = {
  id: string;
  category: string;
  category_slug: string;
  problems: string[];
};
