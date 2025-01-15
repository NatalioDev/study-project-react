import { FC, useContext } from "react";
import { FilterProps, FilterToDo, ToDoContextProps } from "../../utilites/Types/types";
import todoContext from "../../utilites/ContextTodo/TodoContext";
// import { useTheme } from "../../utilites/ContextTheme/UseTheme";


const Filter : FC<FilterProps> = ({setFilter}) => {

  // Gets the relevant properties of the context
  const { filter, handleFilter, todos } = useContext(todoContext) as ToDoContextProps;

  // const { theme } = useTheme();

  // Function that handles the components filter
  const handleClick = (filterValue: FilterToDo) =>{
    handleFilter(filterValue);
    setFilter(filterValue)
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true; // "All"
  });

  return(
    <div className="
      flex items-center gap-4 h-full px-1 ml-8 shadow-lg rounded-md dark:shadow-slate-800 dark:shadow-lg
      md:justify-start md:static md:min-h-0 md:w-auto 
      sm:justify-center sm:absolute sm:top-[200%] sm:left-0 sm:w-full sm:min-h-[2.5rem] 
      ">
      <p 
        className={`cursor-pointer font-semibold hover:text-sky-300 ${
          filter === "All" ? "dark:text-sky-500 text-sky-800" : ""
        }`}
        onClick={() => handleClick("All")}
      >
        All
      </p>

      <p 
        className={`cursor-pointer font-semibold hover:text-sky-300 ${
          filter === "Active" ? "dark:text-sky-500 text-sky-800" : ""
        }`}
        onClick={() => handleClick("Active")}
      >
        Active
      </p>

      <p 
        className={`cursor-pointer font-semibold hover:text-sky-300 ${
          filter === "Completed" ? "dark:text-sky-500 text-sky-800" : ""
        }`}
        onClick={() => handleClick("Completed")}
      >
        Completed
      </p>
      {filteredTodos.length > 1 && (<span className="absolute -left-1 top-full text-center w-full text-base mt-2 font-semibold text-sky-800 dark:text-sky-500 ">
        Drag And Drop To Reorder List
      </span>)}
    </div>
  )
}

export default Filter;