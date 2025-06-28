import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodosContextProvider } from "./context/TodoContext";

function App() {
  return (
    <div>
      <h1>Simple Todo Application</h1>
      <TodosContextProvider>
        <AddTodo />
        <TodoList />
      </TodosContextProvider>
    </div>
  );
}

export default App;
