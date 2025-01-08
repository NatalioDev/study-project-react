import { useContext } from "react";
import todoContext from "./TodoContext";

export const useTodoContext = () =>{
    const context = useContext(todoContext);

    // If there is no context (indicating misuse), it throws an error with the message
    if(!context){
      throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
  };