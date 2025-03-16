import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import "./Header.css"; 

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <nav>
        <Link to="/games">Liste de jeux</Link>
        {isLoggedIn ? (
          <>
            <Link to="/games/new">Ajouter un jeu</Link>
            <button onClick={logout}>Déconnexion</button>
          </>
        ) : (
          <Link to="/login">Connexion</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
