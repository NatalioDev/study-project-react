import { useContext } from "react";
import todoContext from "../../../utilites/ContextTodo/TodoContext";
import { ToDoContextProps, TodoType } from "../../../utilites/Types/types";
import Filter from "../../Filter/Filter";

const TodoStats = () => {
  // Gets the necessary funtions from the todoContext
  const {todos, clearCompleted, handleFilter} = useContext(todoContext) as ToDoContextProps;

  // Function to count the completed ones
  const countCompletedTodos = (todos: TodoType[]): number => {
    return todos.filter(todo => todo.completed).length
  };

  // Function to count the remainder
  const countRemainingTodos = (todos: TodoType[]): number =>{
    return todos.length - countCompletedTodos(todos);
  }

  return (
    <div className="">
      <div className="">
        {countRemainingTodos(todos)}
        items left
      </div>
      
      <Filter setFilter={handleFilter}/>
      
      {countCompletedTodos(todos) > 0 && (
        <div 
          className=""
          onClick={clearCompleted}
        >
          Clear Completed
        </div>
      )}
    </div>
  )
}

export default TodoStats;