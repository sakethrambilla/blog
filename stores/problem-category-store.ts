import { getAllCategories } from "@/actions/problem";
import { ProblemCategory } from "@/types/problem.type";
import { makeAutoObservable } from "mobx";

type ProblemCategoryType = Omit<ProblemCategory, "problems"> & {
  selected: boolean;
};

class ProblemCategoryStore {
  problemCategory: ProblemCategoryType[] = [];
  newCategory: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  getCategory = async () => {
    const data = await getAllCategories();
    const updatedData = data.map((category) => ({
      ...category,
      selected: false,
    }));
    this.problemCategory = updatedData;
  };

  addCategory = (category: Omit<ProblemCategory, "problems">) => {
    this.problemCategory.push({ ...category, selected: false });
  };

  // Toggle selected property of a category
  toggleSelection = (id: string) => {
    console.log(this.problemCategory);
    const category = this.problemCategory.find((cat) => cat.id === id);
    if (category) {
      category.selected = !category.selected;
    }
  };
}

export const problemCategorystore = new ProblemCategoryStore();
