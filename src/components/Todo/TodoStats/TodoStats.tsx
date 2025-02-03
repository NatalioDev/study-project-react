import { useContext, useState } from "react";
import todoContext from "../../../utilites/ContextTodo/TodoContext";
import { ToDoContextProps, TodoType } from "../../../utilites/Types/types";
import Filter from "../../Filter/Filter";
import ModalConfirm from "../../Modal/ModalConfirm";

const TodoStats = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const confirmDelete = () =>{
      clearCompleted();
      setIsModalOpen(false);
    }

    const handleDeleted = () => {
      setIsModalOpen(true);
    }

  // Gets the necessary funtions from the todoContext
  const {todos, clearCompleted, handleFilter, filter} = useContext(todoContext) as ToDoContextProps;

  // Function to count the completed ones
  const countCompletedTodos = (todos: TodoType[]): number => {
    return todos.filter(todo => todo.completed).length
  };

  // Function to count the remainder
  const countRemainingTodos = (todos: TodoType[]): number =>{
    return todos.length - countCompletedTodos(todos);
  }

  return (
    <>
    <div className="flex flex-wrap items-center rounded-b-[0.25rem] rounded-tl-[0rem] rounded-tr-[0rem] justify-between min-w-10 p-4 relative w-full font-semibold sm:relative">
      <div className="">
        {countRemainingTodos(todos)}
        {' '}
        Tasks
      </div>
      
      <Filter setFilter={handleFilter}/>
      
      {countCompletedTodos(todos) > 0 && filter !== "Active" && (
        <div className="w-full flex justify-center mt-4">
          <div 
            className="cursor-pointer font-semibold rounded-md shadow-sm shadow-red-300 hover:text-red-700 dark:shadow-red-900 dark:shadow-md text-red-500"
            onClick={handleDeleted}
          >
            Clear Completed
          </div>
        </div>
      )}
    </div>
    {/* Modal de Confirmacion */}
    <ModalConfirm
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onConfirm={confirmDelete}
    >
      Are you sure you want to delete this task?
    </ModalConfirm>
  </>
  )
}

export default TodoStats;