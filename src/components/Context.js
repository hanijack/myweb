import React from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("Light");

  function toggleTheme(T) {
    setTheme(T);
  }

  return (
    <Context.Provider value={{ toggleTheme, theme }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
