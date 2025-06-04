import React from "react";
import AppRouter from "./pages/routes";
import "./styles/main.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
      <AppRouter />
    </div>
  );
}

export default App;
