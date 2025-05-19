"use client";

import { useState } from "react";
import { Button, Input } from "./ui";
import { deleteTodo, updateTodo } from "@/app/todos/actions";

type Props = { id: string; text: string };

export function TodoListItem({ id, text }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const handleDeleteTodo = async () => await deleteTodo(id);

  const handleUpdateTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // NOTE:server actionsを使うならサーバーコンポーネントにしないと。全てformで実行する
  return (
    <div>
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
          <Button className="cursor-pointer" type="submit" onClick={(e) => handleUpdateTodo(e)}>
            Save
          </Button>
        </form>
      )}
    </div>
  );
}
