"use client";

import { Editor, EditorContent } from "@tiptap/react";
import TextEditorButtons from "./text-editor-buttons";

const TextEditor = ({ editor }: { editor: Editor }) => {
  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden">
      <TextEditorButtons editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
