import { ChangeEvent, FormEvent, useContext, useState } from "react"
import todoContext from "../../../utilites/ContextTodo/TodoContext"
import { ToDoContextProps, TodoType } from "../../../utilites/Types/types"

import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {

  const [text, setText] = useState<string>("")


  const {addTodo} = useContext(todoContext) as ToDoContextProps

  const handleChange = ( e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = ( e: FormEvent) => {
    e.preventDefault();

    if(text.trim() !== ""){
      const newTodo: TodoType ={
        id: uuidv4(),
        completed: false,
        text,
      };

      addTodo(newTodo);

      setText("")
    }
  }

  return (
    <>
      <div className="w-full mb-4">
        <form onClick={handleSubmit}>
          <div className="flex pl-4 items-center rounded-md shadow-[10px_10px_80px_rgba(0,0,0,0.4)] bg-slate-50">
            <button className="bg-transparent rounded-[50%] cursor-pointer text-[0] h-6 w-6 border-[1px_solid_rgba(119,122,146)]">Add</button>
            <input 
              type="text" 
              className="text-slate-300 bg-transparent border-none outline-none pt-6 pb-5 px-5 w-full" 
              placeholder="Create a new ToDo"
              value={text}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default TodoInput
