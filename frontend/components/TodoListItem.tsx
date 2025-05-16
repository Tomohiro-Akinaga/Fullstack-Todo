"use client";

import { Button } from "./ui/Button";
import { deleteTodo } from "@/app/todos/actions";

type Props = { id: string; text: string };

export function TodoListItem({ id, text }: Props) {
  const handleDeleteTodo = async () => {
    const res = await deleteTodo(id);
    console.log("レス", res);
  };

  return (
    <div className="flex gap-2 items-center">
      <p>{text}</p>
      <Button className="cursor-pointer" onClick={handleDeleteTodo}>
        Delete
      </Button>
    </div>
  );
}
