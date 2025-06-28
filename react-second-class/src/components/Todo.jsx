import TodoContent from "./TodoContent";
import  { useTodo } from "../context/TodoContext";

export default function Todo({ todo }) {
  const { onChangeTodo, onDeleteTodo } = useTodo();
  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) =>
          onChangeTodo({
            id: todo.id,
            title: todo.title,
            done: e.target.checked,
          })
        }
      />

      <TodoContent todo={todo} />

      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </>
  );
}
