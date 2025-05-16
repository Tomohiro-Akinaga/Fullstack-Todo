import { TodoListItem } from "./TodoListItem";

type Props = {
  todos: { id: string; text: string; completed: boolean }[];
};

export function TodoList({ todos }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo, index) => (
        <TodoListItem key={index} id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
}
