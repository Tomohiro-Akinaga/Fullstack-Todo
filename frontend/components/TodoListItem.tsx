"use client";

import { useState, useEffect } from "react";
import { Button, Input } from "./ui";
import { deleteTodo, updateTodo } from "@/app/todos/actions";

type Props = { id: string; text: string };

export function TodoListItem({ id, text }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const handleDeleteTodo = async () => await deleteTodo(id);

  useEffect(() => setIsEditing(false), [text]);

  return (
    <>
      {!isEditing && (
        <div className="flex gap-2 items-center">
          <p>{text}</p>
          <Button className="cursor-pointer" onClick={handleDeleteTodo}>
            Delete
          </Button>
          <Button className="cursor-pointer" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        </div>
      )}
      {isEditing && (
        <form className="flex gap-2" action={updateTodo}>
          <input type="hidden" name="id" value={id} />
          <Input name="text" defaultValue={text} />
          <Button type="submit" className="cursor-pointer">
            Save
          </Button>
        </form>
      )}
    </>
  );
}
