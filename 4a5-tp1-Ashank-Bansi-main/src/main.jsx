import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GameForm from "./components/gameForm/GameForm.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameForm/>
  </StrictMode>
);
