import { Dispatch, SetStateAction } from "react";

// Types for a task
export interface TodoType {
  text: string;
  completed: boolean;
  id: string;
}

// Types for task filters
export type FilterToDo = 'All' | 'Completed' | 'Active';

// Definition of context props
export interface ToDoContextProps {
    todos: TodoType[];  // Lists
    filter: FilterToDo; // Selected Filters
    // Function to set the list
    setTodos: Dispatch<SetStateAction<TodoType[]>>  
    // Function to add a new item to the list
    addTodo: (item: TodoType) => void;  
    // Function to mark a completed item
    setCompleted: (id: string) => void;  
    // Function to delete an item
    clearTodo: (item: string) => void;  
    // Function to delete completed 
    clearCompleted: () => void;  
    // Function to change filter option
    handleFilter: (item: FilterToDo) => void;  
  }

  // Types setFilter
  export interface FilterProps{
    setFilter: (filter: FilterToDo) => void;
  }

  // Types Todo
  export interface TodoProps {
    todoText: string;
    completed: boolean;
    index: number;
    id: string;
  }