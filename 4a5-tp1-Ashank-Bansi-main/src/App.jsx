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
import RootLayout from "./Containers/Roots";
import ErrorPage from "./Containers/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <GameList /> }, 
      { path: "games", element: <GameList /> }, 
      { path: "login", element: <LoginForm /> }, 
    ],
  },
]);

const routerLogin = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <GameList /> }, 
      { path: "games", element: <GameList /> }, 
      { path: "games/new", element: <GameForm /> }, 
      { path: "login", element: <Navigate to="/games" replace /> }, 
    ],
  },
]);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <RouterProvider router={isLoggedIn ? routerLogin : router} />
    </AuthContext.Provider>
  );
};

export default App;
