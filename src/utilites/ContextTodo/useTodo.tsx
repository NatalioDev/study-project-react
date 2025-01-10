import { useEffect, useState } from "react";
import { FilterToDo, TodoType } from "../Types/types";

// Function to get the list of items from local storage
const getTodoList = () : TodoType[] => {
    const todoList = localStorage.getItem('todo-list');
    return todoList ? JSON.parse(todoList) : []
  };

  export const useTodo = () => {
    const [todos, setTodos] = useState<TodoType[]>(getTodoList);
    const [filter, setFilter] = useState<FilterToDo>('All');

    // Save them all to local storage every time they change
    useEffect (() =>{
        localStorage.setItem('todo-list', JSON.stringify(todos));
    },[todos]);

    // Functions to manipulate data
    const addTodo = (item: TodoType) =>{
        // Check if an item already exists
        const isDuplicate = todos.some((todo) => todo.text === item.text);
        // If there is no duplicate, add the new item
        if(!isDuplicate){
            // Update list
            setTodos([item, ...todos]);
        }
    };

    // Delete an element by its id
    const clearTodo = (id: string) =>{
        // Create a new array with all the items that meet a condition
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    // Function to mark a completed item by its id
    const setCompleted = (id: string) => {
        setTodos(prevTodos => 
          prevTodos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

    // Remove completed items by their id
    const clearCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };

    // Filter
    const handleFilter = (item: FilterToDo) =>{
        setFilter(item);
    }

    return {
        todos,
        filter,
        setTodos,
        addTodo,
        setCompleted,
        clearTodo,
        clearCompleted,
        handleFilter,
    };
  };