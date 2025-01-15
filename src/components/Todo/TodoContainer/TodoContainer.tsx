import { useContext } from "react"
import todoContext from "../../../utilites/ContextTodo/TodoContext"
import { ToDoContextProps } from "../../../utilites/Types/types"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Todo from "../Todo";
import TodoStats from "../TodoStats/TodoStats";

const TodoContainer = () => {

  const { todos, setTodos, filter} = useContext(todoContext) as ToDoContextProps;

  const filteredTodos = todos.filter((todo) => {
    if(filter === "All") return true;
    if(filter === "Active") return !todo.completed;
    if(filter === "Completed") return todo.completed;
    return true;
  });

  let noTodosMessage = "";
  switch(filter) {
    case "All":
      noTodosMessage = "No tasks found.";
      break;
    case "Completed":
      noTodosMessage = "No completed tasks found.";
      break;
    case "Active":
      noTodosMessage = "No active tasks found."
      break;
    default:
      noTodosMessage = "No tasks found.";
      break;
  }

  function handleOnDragEnd(result: DropResult){
    if(!result.destination) return;

    const updateTodos = Array.from(todos);

    const [reorderedItem] = updateTodos.splice(result.source.index, 1);

    updateTodos.splice(result.destination.index, 0, reorderedItem);

    setTodos(updateTodos);
  };

  if(todos.length === 0){
    return <h2 className="text-center w-full mt-10 relative font-semibold text-lg text-amber-600 dark:text-sky-600">
      No ToDos Yet! <br />
      Add a New Task to get Started.
    </h2>
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {filteredTodos.length > 0 ? (
        <Droppable droppableId="todos">
          {(provided) => (
            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef}
              className="m-0 p-0"
            >
              {filteredTodos.map((todo, index) => (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  todoText={todo.text}
                  completed={todo.completed}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        ):(
          <div className="flex items-center cursor-none justify-center min-h-12 break-words p-4 w-full relative break-all text-sm bg-transparent text-rose-700 dark:text-rose-500 border-b-[2px_solid_rgb(57,58,76)] bg-slate-950">
            <h2 className="relative font-bold">         
              {noTodosMessage}
            </h2>
          </div>
        )}
      </DragDropContext>
      {todos.length > 0 && <TodoStats/>}
    </>
  )
}

export default TodoContainer
