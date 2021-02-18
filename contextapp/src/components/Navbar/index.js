import React, { Component, Consumer } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => (
          <AuthContext.Consumer>
            {(authContext) => {
              const { isLightTheme, light, dark } = themeContext;
              const { isAuthenticated, toggleAuth } = authContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth} style={{ cursor: "pointer" }}>
                    {isAuthenticated ? "Logged in" : "Logged out"}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </AuthContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
