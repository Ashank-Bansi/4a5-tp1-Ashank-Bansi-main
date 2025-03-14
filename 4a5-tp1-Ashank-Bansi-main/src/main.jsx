import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginForm from "./components/loginForm/LoginForm.jsx";
import GameList from "./components/gameList/GameList.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameList/>
  </StrictMode>
);
