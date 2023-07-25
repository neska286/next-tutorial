"use client";

import { FC, createContext, useState } from "react";
interface Props {
    children: React.ReactNode;
   }
 
export const ThemeContext = createContext<any>({});

export const ThemeProvider: FC<Props> = ({ children}) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};