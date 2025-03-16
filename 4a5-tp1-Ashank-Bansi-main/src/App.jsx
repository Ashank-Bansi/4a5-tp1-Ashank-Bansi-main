import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useCallback, useState } from "react";
import { AuthContext } from "./components/authContext/AuthContext";
import LoginForm from "./components/LoginForm/LoginForm";
import GameList from "./components/GameList/GameList";
import GameForm from "./components/gameForm/GameForm";
import RootLayout from "./Containers/Roots"
import ErrorPage from "./Containers/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
      { path: "", element: <GameList/> },
      { path: "login", element: <LoginForm /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);