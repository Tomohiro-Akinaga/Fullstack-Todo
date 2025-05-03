import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main className="p-10 h-screen flex flex-col gap-5">
      <TodoForm />
      <TodoList />
    </main>
  );
}
