"use server";

import { revalidatePath } from "next/cache";

export async function getTodo() {
  const todos = await fetch("https://fullstack-todo-h1oh.onrender.com/todos", { method: "GET" });
  return todos.json();
}

export async function createTodo(formData: FormData) {
  await fetch("https://fullstack-todo-h1oh.onrender.com/todos", {
    method: "POST",
    body: JSON.stringify({ text: formData.get("text") }),
    headers: { "Content-Type": "application/json" },
  });
  revalidatePath("/");
}

export async function updateTodo(formData: FormData) {
  await fetch(`https://fullstack-todo-h1oh.onrender.com/todos/${formData.get("id")}`, {
    method: "PATCH",
    body: JSON.stringify({ text: formData.get("text") }),
    headers: { "Content-Type": "application/json" },
  });
  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  await fetch(`https://fullstack-todo-h1oh.onrender.com/todos/${id}`, { method: "DELETE" });
  revalidatePath("/");
}
