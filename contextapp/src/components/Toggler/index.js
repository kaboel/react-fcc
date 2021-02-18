import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Toggler = () => {
  const themeContext = useContext(ThemeContext);
  const { toggleTheme } = themeContext;

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default Toggler;
