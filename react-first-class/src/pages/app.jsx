import { useEffect, useState } from "react";
import Nav from "../components/Nav";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const fetchAllTodos = async () => {
    fetch(`http://localhost:3000/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  };
  useEffect(() => {
    fetchAllTodos();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("I am from submit handler");
    console.log(todoTitle, "todotitle");

    fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify({ title: todoTitle, isCompleted: false }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      fetchAllTodos();
      setTodoTitle("");
    });
  };

  const removeHandler = (todoId) => {
    fetch(`http://localhost:3000/todos/${todoId}`, {
      method: "DELETE",
    }).then(() => {
      fetchAllTodos();
    });
  };
  return (
    <>
      <Nav />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      {/* <hr /> */}
      <h2 className="text-success">Add Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => removeHandler(todo.id)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
