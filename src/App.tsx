import Header from "./components/Header/Header";
import { ThemeContextProvider } from "./utilites/ContextTheme/ThemeContextProvider";
import { TodoProvider } from "./utilites/ContextTodo/TodoProvider";

const App = () => {

  return (
    <ThemeContextProvider>
      {/* Aplicar colores personalizados */}
      <div className="min-h-screen transition-colors duration-300 bg-customLight text-lightText dark:bg-customDark dark:text-darkText">
        <Header />
        <main className="p-4">
          <TodoProvider>
            <h2 className="text-xl font-bold dark:text-yellow-400">Mi aplicación con tema dinámico</h2>
            <p className="dark:text-gray-200">
              ¡Cambia entre el modo claro y oscuro!
            </p>
          </TodoProvider>
          
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
