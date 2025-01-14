import { useTheme } from "../../utilites/ContextTheme/UseTheme"


const Header = () => {

  // Traemos el theme y la function para cambiar el contex
  const {theme , toggleTheme} =useTheme();
  return (
    <header className="flex items-center justify-between mt-[50px] mr-0 mb-[25px] ml-0 w-[90%] md:mt-16 md:mr-0 md:mb-10 md:ml-0 md:w-[550px]">
      <h1 className="text-sky-900 text-4xl tracking-[12px] uppercase dark:text-sky-600">
        ToDo List
      </h1>
      <button className="bg-none border-none cursor-pointer mr-[-7px] outline-none pt-2 px-2 pb-1 transition duration-1000 rounded-md" onClick={toggleTheme}>
        {/* Mostramos el icono correxpondiente (dark) */}
        {theme.name === "dark" ? (
          <img src="icon/icon-moon.svg" alt="Moon Icon" />
        ):(
          <img 
            src="icon/icon-sun.svg" 
            alt="Sun Icon" 
          />
        )}
      </button>
    </header>
  )
}

export default Header
