type Props = {
  todos: {
    id: string;
    text: string;
    completed: boolean;
  }[];
};

export function TodoList({ todos }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
