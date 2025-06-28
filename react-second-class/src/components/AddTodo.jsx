import { useState } from "react";
import { useTodo } from "../context/TodoContext";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const { onAddTodo } = useTodo();

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </>
  );
}
