"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { problemCategorystore } from "@/stores/problem-category-store";
import { toJS } from "mobx";
import InitialFormInformation from "./intial-form-information";
import { useToast } from "@/hooks/use-toast";
import FinalFormInformation from "./final-form-information";
import { addNeProblem } from "@/actions/problem";
import problemStore from "@/stores/problem-store";
import { useRouter } from "next/navigation";

// Form schema validation using zod
const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters" }),
  slug: z.string().min(2, { message: "slug must be at least 2 characters" }),
  link: z.string().url({ message: "Link must be a valid URL" }),
  content: z
    .string()
    .min(12, { message: "Content must be at least 100 words" }),
  difficulty_level: z
    .string()
    .min(3, { message: "Difficulty level is required" }),
  publish: z.boolean({ required_error: "Publish is required" }),
});

// Type Inference from the schema
export type FormSchemaType = z.infer<typeof formSchema>;

// Component : DSADetailsForm
export default function ProblemDetailsForm() {
  const { toast } = useToast();
  const [step, setStep] = useState<number>(1);
  const category = problemStore.problem.category;
  const router = useRouter();

  // Initialize React Hook Form with Zod
  const formMethods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: { publish: false },
    // defaultValues: problemStore.problem,
  });

  // Fetch the problem categories from mobx store on component mount
  useEffect(() => {
    problemCategorystore.getCategory();
    console.log(toJS(problemCategorystore.problemCategory));
  }, []);

  // Handle "Next" Button for step 1 validation
  function handleNext() {
    const { title, slug, link } = formMethods.watch();

    // Basica validation to check if required fields are filled
    if (
      !title ||
      !slug ||
      !link ||
      !problemCategorystore.problemCategory.length
    ) {
      toast({
        title: "Please fill in all required fields ",
        description: "Make sure to provide a title, slug, link and category",
      });
      console.log("Form Validation Failed ");
    } else {
      // Proceed to step 2
      setStep(2);
    }
  }

  // Handle Form Submit
  async function onSubmit(data: FormSchemaType) {
    const response = await addNeProblem({ ...data, category });
    if (response.status === "failed") {
      toast({
        title: "Could save problem",
        description: "Please try again after some time",
      });
    } else {
      toast({
        title: "Problem is saved",
      });
    }
    router.push("/dashboard");
  }
  console.log(formMethods.formState.errors);

  return (
    <>
      <form
        className="flex h-full w-full flex-col items-start justify-start gap-8"
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        {step == 1 ? (
          <InitialFormInformation formMethods={formMethods} />
        ) : (
          <FinalFormInformation formMethods={formMethods} />
        )}

        <FormNavigationButtons
          step={step}
          setStep={setStep}
          handleNext={handleNext}
        />
      </form>
    </>
  );
}

interface FormNavigationButtonsProps {
  step: number;
  setStep: (step: number) => void;
  handleNext: () => void;
}

const FormNavigationButtons = ({
  step,
  setStep,
  handleNext,
}: FormNavigationButtonsProps) => {
  return (
    <>
      {/* Back ,Next and Submit Button */}
      {step == 1 ? (
        <div className="flex w-full items-center justify-end">
          <Button className="text-xl" variant={"ghost"} onClick={handleNext}>
            Next
          </Button>
        </div>
      ) : (
        <div className={"flex w-full items-center justify-between"}>
          <Button
            className="text-xl"
            variant={"ghost"}
            onClick={() => setStep(1)}
          >
            Back
          </Button>
          <Button className="text-xl" type="submit">
            Submit
          </Button>
        </div>
      )}
    </>
  );
};
