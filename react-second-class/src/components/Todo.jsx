import TodoContent from "./TodoContent";

export default function Todo({ todo, onChangeTodo, onDeleteTodo }) {
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

      <TodoContent todo={todo} onChangeTodo={onChangeTodo}/>

      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </>
  );
}
