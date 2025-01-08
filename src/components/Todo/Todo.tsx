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
            className=""
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            data-index={index}
          >
            <div 
              className={`circle${completed ? " circle-gradient" : ""}`}
              onClick={handleClick}
            ></div>

            <p className="">{todoText}</p>

            <img src="icon/icon-cross.svg" alt="cross" onClick={handleDeleted}/>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default Todo
