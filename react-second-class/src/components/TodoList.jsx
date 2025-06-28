import Todo from "./Todo";
import  { useTodo } from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useTodo();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  );
}
