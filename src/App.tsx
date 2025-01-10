import Header from "./components/Header/Header";
import TodoContainer from "./components/Todo/TodoContainer/TodoContainer";
import TodoInput from "./components/Todo/TodoInput/TodoInput";
import { TodoProvider } from "./utilites/ContextTodo/TodoProvider";

const App = () => {

  return (
      <main className="flex flex-col items-center m-0 p-0 min-h-screen transition-colors duration-300 bg-customLight text-lightText dark:bg-customDark dark:text-darkText">
        <Header />
        <div 
          className="
            mt-5 w-[90%] rounded-md
            md:w-[550px]
        ">
          <TodoProvider>
            <TodoInput/>
            <TodoContainer/>
          </TodoProvider>
          
        </div>
      </main>
  );
};

export default App;
