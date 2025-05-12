"use server";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  await fetch("https://fullstack-todo-h1oh.onrender.com/todos", {
    method: "POST",
    body: JSON.stringify({ text: formData.get("text") }),
    headers: { "Content-Type": "application/json" },
  });
  revalidatePath("/");
}
