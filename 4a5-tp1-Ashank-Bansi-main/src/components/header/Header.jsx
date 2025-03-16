import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../authContext/AuthContext";
import "./Header.css"; 

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate("/games"); 
  };

  return (
    <header className="header">
      <nav>
        <Link to="/games">Liste de jeux</Link>
        {isLoggedIn ? (
          <>
            <Link to="/games/new">Ajouter un jeu</Link>
            <button onClick={handleLogout}>Déconnexion</button> 
          </>
        ) : (
          <Link to="/login">Connexion</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
