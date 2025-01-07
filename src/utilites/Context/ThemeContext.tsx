import { createContext } from "react";

// Definimos tipos
type Theme = {name: string};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

// Definimos los temas oscuro y claro
export const darkTheme: Theme = {name: "dark"};
export const lightTheme: Theme = {name: "light"};

// Creamos el context actual
export const ThemeContext = createContext<ThemeContextType> ({
  theme: darkTheme, // Predeterminado
  toggleTheme: () => {} // Function por defecto
})

