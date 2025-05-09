import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { createTodo } from "@/app/todos/actions";

export function TodoForm() {
  return (
    <form className="flex gap-2" action={createTodo}>
      <Button className="cursor-pointer">+</Button>
      <Input />
    </form>
  );
}
