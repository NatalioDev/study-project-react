import { useContext } from "react";
import todoContext from "./TodoContext";

export const useTodoContext = () =>{
    const context = useContext(todoContext);
    if(!context){
      throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
  };