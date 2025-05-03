import { TodoInput } from "@/components/TodoInput";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main className="p-10 h-screen flex flex-col gap-5">
      <TodoInput />
      <TodoList />
    </main>
  );
}
