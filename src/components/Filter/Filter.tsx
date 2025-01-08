import { FC, useContext } from "react";
import { FilterProps, FilterToDo, ToDoContextProps } from "../../utilites/Types/types";
import todoContext from "../../utilites/ContextTodo/TodoContext";
// import { useTheme } from "../../utilites/ContextTheme/UseTheme";


const Filter : FC<FilterProps> = ({setFilter}) => {

  // Gets the relevant properties of the context
  const { filter, handleFilter } = useContext(todoContext) as ToDoContextProps;

  // const { theme } = useTheme();

  // Function that handles the components filter
  const handleClick = (filterValue: FilterToDo) =>{
    handleFilter(filterValue);
    setFilter(filterValue)
  };

  return(
    <div className="
      relative flex items-center gap-4 h-full 
      md:justify-start md:static md:min-h-0 md:w-auto 
      sm:justify-center sm:fixed sm:top-[200%] sm:left-0 sm:w-full sm:min-h-[2.5rem] sm:rounded-md sm:shadow-md 
      filter-todo">
      <p 
        className={`cursor-pointer font-semibold ${
          filter === "All" ? "text-blue-500" : ""
        }`}
        onClick={() => handleClick("All")}
      >
        All
      </p>

      <p 
        className={`cursor-pointer font-semibold ${
          filter === "Active" ? "text-blue-500" : ""
        }`}
        onClick={() => handleClick("Active")}
      >
        Avtive
      </p>

      <p 
        className={`cursor-pointer font-semibold ${
          filter === "Completed" ? "text-blue-500" : ""
        }`}
        onClick={() => handleClick("Completed")}
      >
        Completed
      </p>
      <span className="absolute left-0 top-full text-center w-full text-sm mt-4">
        Drag and drop to reorder list
      </span>
    </div>
  )
}

export default Filter;