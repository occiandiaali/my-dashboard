// import { createContext, useReducer } from "react";

// // type ModeType = {
// //   darkMode: boolean;
// // }

// const INITIAL_STATE = {
//   darkMode: true,
// };

// export const DarkModeContext = createContext(INITIAL_STATE);

// function darkModeReducer(state: { darkMode: any }, action: { type: any }) {
//   switch (action.type) {
//     case "LIGHT": {
//       return {
//         darkMode: false,
//       };
//     }
//     case "DARK": {
//       return {
//         darkMode: true,
//       };
//     }
//     case "TOGGLE": {
//       return {
//         darkMode: !state.darkMode,
//       };
//     }
//     default:
//       return state;
//   }
// }

// function DarkModeContextProvider({ children }: { children: JSX.Element }) {
//   const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);
//   const value = { state, dispatch };
//   return (
//     <DarkModeContext.Provider value={value}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// }

// export { DarkModeContextProvider };

// import React, { createContext, useState } from "react";

// type Theme = "light" | "dark";
// type ThemeContext = { theme: Theme; toggleTheme: () => void };

// export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

// export const ThemeProvider: React.FC = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>("light");
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const colour = theme === "light" ? "#333" : "#FFF";
//   const backgroundColour = theme === "light" ? "#FFF" : "#333";

//   document.body.style.color = colour;
//   document.body.style.backgroundColor = backgroundColour;

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";

type childrenType = {
  children: React.ReactNode;
};

// declaring createContext type, for preventing error in value of DarkContext.Provider
type DarkContextType = {
  isDark: string | null;
  setIsDark: React.Dispatch<React.SetStateAction<string | null>>;
};

// import it in App.tsx
export const DarkContext = createContext({} as DarkContextType);

// import this DarkContextProvider in index.tsx
export const DarkContextProvider = ({ children }: childrenType) => {
  const [isDark, setIsDark] = useState(localStorage.getItem("isDark"));
  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
};
