"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "./problem-details-form";
import problemStore from "@/stores/problem-store";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/sluggify";
import { problemCategorystore } from "@/stores/problem-category-store";
import { cn } from "@/lib/utils";
import { observer } from "mobx-react";
import { useToast } from "@/hooks/use-toast";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Props interface for InitialFormInformation
interface InitialFormInformation {
  formMethods: UseFormReturn<FormSchemaType>;
}

const InitialFormInformation: FC<InitialFormInformation> = ({
  formMethods,
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = formMethods;
  const { toast } = useToast();

  // Auto-generate the slug from the title
  const handleSlugGeneration = () => {
    const title = watch("title");
    // console.log("title");
    if (title) {
      setValue("slug", slugify(title));
    } else {
      toast({
        title: "Title is required",
        description: "Please enter Title before auto-generation",
      });
    }
  };
  console.log(watch("difficulty_level"));
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <div className="flex w-full items-center justify-start gap-4">
        {/* Title */}
        <div className="flex w-2/3 flex-col items-start gap-2">
          <Label className="text-xl">Title</Label>
          <Input
            type="text"
            className="w-full rounded"
            {...register("title")}
            defaultValue={problemStore.problem.title}
          />
          <Label className="text-destructive">
            {errors.title && <p>This field is required</p>}
          </Label>
        </div>
        <div className="flex w-fit flex-col items-start justify-start gap-2">
          <Label className="text-xl">Difficulty Level</Label>
          <Select
            onValueChange={(value: string) =>
              setValue("difficulty_level", value)
            }
          >
            <SelectTrigger className="w-[180px] rounded">
              <SelectValue placeholder="Difficulty Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Label className="text-destructive">
            {errors.difficulty_level && <p>This field is required</p>}
          </Label>
        </div>
      </div>

      {/* Slug && Link */}
      <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:gap-12">
        {/* Slug Input */}
        <div className="flex w-full flex-col items-start gap-2">
          <Label className="text-xl">Slug</Label>
          <div className="flex w-full items-center gap-4">
            <Input
              type="text"
              className="w-full rounded"
              {...register("slug")}
              defaultValue={problemStore.problem.slug}
            />
            <Button type="button" onClick={handleSlugGeneration}>
              Auto Generate
            </Button>
          </div>
          <Label className="text-destructive">
            {errors.slug && <p>This field is required</p>}
          </Label>
        </div>

        {/* Link Input */}
        <div className="flex w-full flex-col items-start gap-2">
          <Label className="text-xl">Link</Label>
          <Input
            type="text"
            className="w-full rounded"
            {...register("link")}
            defaultValue={problemStore.problem.link}
          />
          <Label className="text-destructive">
            {errors.link && <p>This field is required</p>}
          </Label>
        </div>
      </div>

      {/* Categories */}
      <ProblemCategory />
    </div>
  );
};

export default InitialFormInformation;

const ProblemCategory: FC = observer(() => {
  return (
    <div className="flex w-full flex-col gap-4 lg:w-1/2">
      <div className="flex w-full items-center justify-between gap-4">
        <h3 className="text-xl"> Category</h3>
        <Button variant={"ghost"} size={"sm"}>
          Add new category
        </Button>
      </div>
      <div className="flex flex-wrap gap-4">
        {problemCategorystore.problemCategory.map((category) => (
          <div
            key={category.id}
            className={cn(
              "rounded p-2",
              category.selected ? "bg-gray-700" : "bg-gray-400",
            )}
            onClick={() => problemCategorystore.toggleSelection(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
});
