import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { DarkContext } from "./context/darkModeContext";
import "./style/dark.scss";

function App() {
  const { isDark, setIsDark } = useContext(DarkContext);
  return (
    <div className={localStorage.getItem("isDark") === "dark" ? "dark" : ""}>
      <div className="app">
        <Navbar setIsDark={setIsDark} isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
