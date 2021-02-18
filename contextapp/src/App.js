import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Toggler from "./components/Toggler";
import AuthProvider from "./contexts/AuthContext";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <Navbar />
          <BookList />
          <Toggler />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
