"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import { extensions } from "./tiptap-extensions";

interface TextEditorViewProps {
  content: string;
}

const TextEditorView = ({ content }: TextEditorViewProps) => {
  const editor = useEditor({
    extensions: extensions,
    content: content,
    editable: false,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        class:
          " prose lg:prose-lg prose-headings:text-primary prose-h2:my-6 prose-h3:my-4 prose-p:m-0 prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-img:w-full prose-img:rounded-xl  prose-video:rounded-xl    w-full    prose-hr:m-2 ",
      },
    },
  });
  return <EditorContent editor={editor} />;
};

export default TextEditorView;
