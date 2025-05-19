"use client";

import { useState } from "react";
import { Button, Input } from "./ui";
import { deleteTodo, updateTodo } from "@/app/todos/actions";

type Props = { id: string; text: string };

export function TodoListItem({ id, text }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [localText, setLocalText] = useState(text);

  const handleDeleteTodo = async () => await deleteTodo(id);

  const handleUpdateTodo = async (formData: FormData) => {
    const newText = formData.get("text") as string;
    await updateTodo(formData);
    setLocalText(newText);
    setIsEditing(false);
  };

  return (
    <>
      {!isEditing && (
        <div className="flex gap-2 items-center">
          <p>{localText}</p>
          <Button className="cursor-pointer" onClick={handleDeleteTodo}>
            Delete
          </Button>
          <Button className="cursor-pointer" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </div>
      )}

      {isEditing && (
        <form className="flex gap-2" action={handleUpdateTodo}>
          <input type="hidden" name="id" value={id} />
          <Input name="text" defaultValue={localText} />
          <Button type="submit" className="cursor-pointer">
            Save
          </Button>
        </form>
      )}
    </>
  );
}
