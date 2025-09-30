//  import { createContext, useContext, useEffect, useState } from "react";
// const ThemeContext = createContext();

// export const ThemeProvide = ({childern}) =>{
//     const [isDarkMode, toggleDarkMode] = useState(
//         localStorage.getItem("theme") || "light"
//     );
//     useEffect(() => {
//         const root = window.document.documentElement;
//         if (isDarkMode === "dark"){
//             root.classList.add("dark")
//         }else{
//             root.classList.remove("dark");
//         }
//         localStorage.setItem("them", isDarkMode);
//     },[isDarkMode]);
//     return (
//         <ThemeContext.Provider
//          value={{isDarkMode: isDarkMode === "dark", toggleDarkMode}}
//          >
//             {childern}
//          </ThemeContext.Provider>
//     );
// };

// export const useTheme = () => useContext(ThemeContext);

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode: theme === "dark", toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
