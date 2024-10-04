"use server";

import prisma from "@/lib/db";
import { slugify } from "@/lib/sluggify";
import { Problem, ProblemCategory } from "@/types/problem.type";
import { connect } from "http2";

type CreateProblemCategory = Omit<ProblemCategory, "id" | "problems">;

export async function getAllCategories() {
  const response = await prisma.problemCategory.findMany();
  return response;
}

export async function addCategories(data: CreateProblemCategory[]) {
  const response = await prisma.problemCategory.createMany({ data: data });
  return response;
}

export async function addNeProblem(data: Omit<Problem, "id">) {
  const { title, slug, link, content, difficulty_level, publish, category } =
    data;
  try {
    const response = await prisma.problem.create({
      data: {
        title,
        slug,
        link,
        difficulty_level,
        content,
        publish,
        category: {
          connect: category.map((slug: string) => ({ slug: slug })),
        },
      },
    });

    return { status: "success", message: response };
  } catch (error) {
    console.log(error);
    return { status: "failed" };
  }
}

export async function addProblemCategory(
  data: Omit<ProblemCategory, "id" | "slug" | "problems">,
) {
  const { name } = data;
  const slug = slugify(name);

  try {
    const resposne = await prisma.problemCategory.create({
      data: { name, slug },
    });
    return { status: "success", message: resposne };
  } catch (error) {
    console.log(error);
    return { status: "failed" };
  }
}

export async function getAllProblems() {
  try {
    const data = await prisma.problem.findMany({
      select: {
        title: true,
        slug: true,
        difficulty_level: true,
        category: {
          select: { name: true, slug: true },
        },
      },
    });
    return { status: "success", data: data };
  } catch (error) {
    console.log(error);
    return { status: "failed" };
  }
}
