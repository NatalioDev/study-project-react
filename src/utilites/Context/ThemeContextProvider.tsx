import { FC, ReactNode, useState, useEffect } from "react";
import { darkTheme, lightTheme, ThemeContext } from "./ThemeContext";

// Proveedor de context para gestionar el tema
export const ThemeContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = (() => {
      const stored = localStorage.getItem("theme");
      try {
        return stored ? JSON.parse(stored) : null;
      } catch (error) {
        console.error("Error al parsear el tema desde Local Storage:", error);
        return null;
      }
    })();
    return savedTheme || darkTheme;
  });

  useEffect(() => {
    // Cuando el tema cambie, actualizamos el body con la clase 'dark' o 'light'
    if (theme.name === "dark") {
      document.body.classList.add("dark"); // Activar el modo oscuro
    } else {
      document.body.classList.remove("dark"); // Desactivar el modo oscuro
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme.name === "dark" ? lightTheme : darkTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme)); // Guardar en localStorage
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
