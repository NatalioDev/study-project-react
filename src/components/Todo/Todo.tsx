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
              className={`bg-transparent border border-[#cacde8] rounded-full cursor-pointer h-7 w-7 left-6 top-1/2 transform -translate-y-1/2 absolute ${completed ? "bg-gradient-to-r from-[#57ddff] to-[#c058f3]" : ""} z-10`}
              onClick={handleClick}
            >
              {completed && (
                <div
                  className="absolute inset-[6px] flex justify-center items-center"
                  style={{
                    backgroundImage: "url('/icon/icon-check.svg')",
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '.99rem',
                    width: '.99rem',
                  }}
                ></div>
              )}
            </div>
            <p className={`break-words pl-11 uppercase break-all font-bold ${completed ? "text-blue-500 line-through ease-linear text-sm text-opacity-55" : ""}`}>{todoText}</p>

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
