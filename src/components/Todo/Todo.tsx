import { useContext } from "react"
import { ToDoContextProps, TodoProps } from "../../utilites/Types/types"
import todoContext from "../../utilites/ContextTodo/TodoContext"
import { Draggable, DraggableProvided } from "react-beautiful-dnd";

const Todo = ({todoText, completed, index, id}: TodoProps) => {

  const {setCompleted, clearTodo} = useContext(todoContext) as ToDoContextProps;

  const handleClick = () => {
    setCompleted(id);
    console.log(id);
  }

  const handleDeleted = () =>{
    clearTodo(id);
  }

  return (
    <>
      <Draggable
        key={id}
        draggableId={id}
        index={index}
      >
        {(provided: DraggableProvided) => (
          <div 
            className={`flex items-center cursor-grab justify-between min-h-12 break-words pt-4 pr-6 pl-4 pb-4 relative w-full break-all `} 
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            data-index={index}
          >
            <div 
              className={`circle${completed ? " circle-gradient" : ""}`}
              onClick={handleClick}
            ></div>

            <p className={`break-words pr-[.5rem] break-all ${completed ? "text-slate-400 line-through" : ""}`}>{todoText}</p>

            <img 
              className="cursor-pointer"
              src="icon/icon-cross.svg" alt="cross" onClick={handleDeleted}/>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default Todo
