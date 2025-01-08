import { FC, ReactNode } from "react";
import { useTodo } from "./useTodo";
import todoContext from "./TodoContext";

// Create Context Provider
export const TodoProvider : FC<{children: ReactNode}> = ({children}) => {
    const todoState = useTodo();
  
    return(
      <todoContext.Provider value={todoState}>
        {children}
      </todoContext.Provider>
    )
  };
