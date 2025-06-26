import { useState } from "react";

export default function TodoContent({todo, onChangeTodo}) {
    const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          onChangeTodo({
            id: todo.id,
            title: e.target.value,
            done: todo.done,
          })
        }
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}
