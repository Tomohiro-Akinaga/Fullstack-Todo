"use client";

import { Button } from "./ui";
import { deleteTodo } from "@/app/todos/actions";

type Props = { id: string; text: string };

export function TodoListItem({ id, text }: Props) {
  return (
    <>
      <form className="flex gap-2 items-center" action={deleteTodo}>
        <p>{text}</p>
        <input type="hidden" name="id" value={id} />
        <Button className="cursor-pointer" type="submit">
          Delete
        </Button>
      </form>
    </>
  );
}
