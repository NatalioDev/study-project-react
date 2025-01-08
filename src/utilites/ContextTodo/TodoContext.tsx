import { createContext } from "react";
import { ToDoContextProps } from "../Types/types";


// Create context
const todoContext = createContext<ToDoContextProps | undefined>(undefined);


export default todoContext;

