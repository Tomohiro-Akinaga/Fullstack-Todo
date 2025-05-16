import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { getTodo } from "./actions";

export default async function Page() {
  const todos = await getTodo();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TodoForm />
        <TodoList todos={todos} />
      </main>
    </div>
  );
}
