import getNextTodoId from "../utils/getNextTodoId";

export default function todosReducer(draftTodos, action) {
  switch (action.type) {

    case "change": {
            const index = draftTodos.findIndex((t) => t.id === action.todo.id);
            draftTodos[index] = action.todo;

            break;
        }

    // case "change":
    //     return todos.map((t) => {
    //     if (t.id === action.todo.id) {
    //       return {
    //         ...t,
    //         title: action.todo.title,
    //         done: action.todo.done,
    //       };
    //     }
    //     return t;
    //   });
      
     case "add":
            draftTodos.push({
                id: getNextTodoId(draftTodos),
                title: action.title,
                done: false,
            });
            break;

    case "delete":
     return draftTodos.filter(todo => todo.id !== action.id)

    default: throw new Error ("no matching actions");
      
  }
}
