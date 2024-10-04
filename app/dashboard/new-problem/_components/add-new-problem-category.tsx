import { addProblemCategory } from "@/actions/problem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { problemCategorystore } from "@/stores/problem-category-store";
import { DialogTitle } from "@radix-ui/react-dialog";
import { observer } from "mobx-react";
import React, { useState } from "react";

const AddNewProblemCateogry = observer(() => {
  const { toast } = useToast();
  const [name, setName] = useState<string>("");
  const { addCategory } = problemCategorystore;

  const handleAddCategory = async () => {
    if (name) {
      const response = await addProblemCategory({ name });
      if (response.status === "success") {
        if (response.message) addCategory(response.message);
        toast({ title: "Category is successfully added" });
      } else {
        toast({
          title: "Couldn't add category",
          description: "Please try after some time",
        });
      }
    } else {
      toast({ title: "Please enter category" });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>Add new Category</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>

        <Input
          type="text"
          placeholder="Enter new cateogry"
          onChange={(e) => setName(e.target.value)}
        />
        <DialogClose>
          <Button onClick={handleAddCategory}>Add</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
});

export default AddNewProblemCateogry;
