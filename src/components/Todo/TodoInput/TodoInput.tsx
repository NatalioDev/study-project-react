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
      <div className="">
        <form onClick={handleSubmit}>
          <div className="">
            <button className="">Add</button>
            <input 
              type="text" 
              className="" 
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
