import { useState } from "react";
import Todo from "./Todo";
import initialTodos from "../data/initialTodos";
import getNextTodoId from "../utils/getNextTodoId";

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeTodo = (todo) => {
    const changedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          title: todo.title,
          done: todo.done,
        };
      }
      return t;
    });

    setTodos(changedTodos);
  };

  const handleDeleteTodo = (id) =>{
   setTodos(todos.filter(todo => todo.id !== id))
  };

  const handleAddTodo = (title) =>{
   setTodos([
      ...todos,
      {
         id: getNextTodoId(todos),
         title,
         done:false,
      },
   ]);
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
