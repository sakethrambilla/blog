"use client";
import {
  Bold,
  Code,
  Image,
  Italic,
  List,
  ListOrdered,
  Minus,
  Quote,
  SquareCode,
  Strikethrough,
  Subscript,
  Superscript,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Editor } from "@tiptap/react";
import { Input } from "./ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const TextEditorButtons = ({ editor }: { editor: Editor }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Heading editor={editor} />
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={cn(
          editor.isActive("bold") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <Bold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={cn(
          editor.isActive("italic") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <Italic />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={cn(
          editor.isActive("strike") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <Strikethrough />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={cn(
          editor.isActive("code") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <Code />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={cn(
          editor.isActive("bulletList") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <List />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={cn(
          editor.isActive("orderedList") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <ListOrdered />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={cn(
          editor.isActive("codeBlock") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <SquareCode />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={cn(
          editor.isActive("blockquote") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <Quote />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={cn(
          editor.isActive("superscript") ? "bg-secondary" : "",
          "rounded p-2",
        )}
      >
        <Superscript />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={editor.isActive("subscript") ? "is-active" : ""}
      >
        <Subscript />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <Minus />
      </button>
      <ImageButton editor={editor} />
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        Hard break
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        Undo
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        Redo
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        Clear marks
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        Clear nodes
      </button>
    </div>
  );
};

export default TextEditorButtons;

const Heading = ({ editor }: { editor: Editor }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>Heading</DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={cn(
              editor.isActive("headingcn(", { level: 1 }) ? "bg-secondary" : "",
              "rounded p-2",
            )}
          >
            H1
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={cn(
              editor.isActive("headingcn(", { level: 2 }) ? "bg-secondary" : "",
              "rounded p-2",
            )}
          >
            H2
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={cn(
              editor.isActive("headingcn(", { level: 3 }) ? "bg-secondary" : "",
              "rounded p-2",
            )}
          >
            H3
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={cn(
              editor.isActive("headingcn(", { level: 4 }) ? "bg-secondary" : "",
              "rounded p-2",
            )}
          >
            H4
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

const ImageButton = ({ editor }: { editor: Editor }) => {
  const { toast } = useToast();
  const [url, setUrl] = useState<string>("");
  const addImage = () => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
      toast({ title: "Image is added 👍" });
    } else {
      toast({ title: "Url is not given" });
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Image />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add the url of the image</DialogTitle>
        </DialogHeader>
        <Input
          type="text"
          placeholder="Enter your url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="button" onClick={addImage}>
          Add Image
        </Button>
      </DialogContent>
    </Dialog>
  );
};
