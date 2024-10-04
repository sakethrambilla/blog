"use client";

import { extensions } from "@/components/tiptap-extensions";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEditor } from "@tiptap/react";
import dynamic from "next/dynamic";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "./problem-details-form";
const TextEditor = dynamic(() => import("@/components/text-editor"), {
  ssr: false,
});

// Props interface for FinalFormInformation
interface FinalFormInformationProps {
  formMethods: UseFormReturn<FormSchemaType>;
}

const FinalFormInformation = ({ formMethods }: FinalFormInformationProps) => {
  const { setValue, watch } = formMethods;

  const editor = useEditor({
    extensions: extensions,
    content: "<p>Hello World! 🌎️</p>",
    onUpdate({ editor }) {
      const updatedBody = editor?.getHTML() as string;
      setValue("content", updatedBody);
      console.log(watch("content"));
    },

    editorProps: {
      attributes: {
        class:
          " prose lg:prose-lg prose-headings:text-primary prose-h2:my-6 prose-h3:my-4 prose-p:m-0 prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-img:w-full prose-img:rounded-xl  prose-video:rounded-xl   rounded-lg max-w-none border p-4 w-full h-[60vh] outline-none overflow-y-auto  prose-hr:m-1",
      },
    },
  });

  if (!editor) {
    return null;
  }
  // console.log(watch("content"), editor.getHTML);
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-start justify-start gap-2">
        <Label>Publish</Label>
        <Switch onCheckedChange={(value) => setValue("publish", value)} />
      </div>
      <TextEditor editor={editor} />
    </div>
  );
};

export default FinalFormInformation;
