"use server";

import prisma from "@/lib/db";
import { DsaProblem, DsaProblemCategory } from "@/types/dsa-problem.type";
import { connect } from "http2";

type CreateDsaProblemCategory = Omit<DsaProblemCategory, "id" | "problems">;

export async function getAllCategories() {
  const response = await prisma.dsaProblemCategory.findMany();
  return response;
}

export async function addCategories(data: CreateDsaProblemCategory[]) {
  const response = await prisma.dsaProblemCategory.createMany({ data: data });
  return response;
}

export async function addNeProblem(data: Omit<DsaProblem, "id">) {
  const { title, slug, link, content, difficulty_level, publish, category } =
    data;
  try {
    const response = await prisma.dsaProblem.create({
      data: {
        title,
        slug,
        link,
        difficulty_level,
        content,
        publish,
        category: {
          connect: category.map((slug) => ({ category_slug: slug })),
        },
      },
    });

    return { status: "success", message: response };
  } catch (error) {
    console.log(error);
    return { status: "failed" };
  }
}
