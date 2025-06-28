import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import todosReducer from "../reducers/todosReducer";
import initialTodos from "../data/initialTodos";

const TodosContext = createContext(null);

export default TodosContext; 

export const TodosContextProvider = ({ children }) => {
  const [todos, dispatch] = useImmerReducer(todosReducer, initialTodos);

  const handleChangeTodo = (todo) => {
    dispatch({
      type: "change",
      todo,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete",
      id,
    });
  };

  const handleAddTodo = (title) => {
    dispatch({
      type: "add",
      title,
    });
  };

  return (
    <TodosContext
      value={{
        todos,
        onChangeTodo: handleChangeTodo,
        onDeleteTodo: handleDeleteTodo,
        onAddTodo: handleAddTodo,
      }}
    >
      {children}
    </TodosContext>
  );
};

export function useTodo(){
    return useContext(TodosContext);
}