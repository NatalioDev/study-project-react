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
          <div className="flex pl-4 items-center rounded-md shadow-[10px_10px_80px_rgba(0,50,60,0.3)] dark:shadow-[10px_10px_80px_rgba(255,255,255,0.14)] bg-slate-50 dark:bg-cyan-950">
            <button className="bg-transparent  cursor-pointer text-[0] h-0 w-0 ">Add</button>
            <input 
              type="text" 
              className="text-slate-500 font-semibold dark:text-slate-50 bg-transparent border-none outline-none pt-6 pb-5 px-5 w-full" 
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
