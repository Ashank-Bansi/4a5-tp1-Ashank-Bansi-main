import GameIcon from "../gameIcon/GameIcon";
import "./GameCard.css";
import { AuthContext } from "../authContext/AuthContext"; 
import { useContext } from "react";

function GameCard(props) {
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <div className="game-card">
            <div className="game-card-header">
                <GameIcon cover={props.cover} />
            </div>
            <h2 className="game-card-name">{props.name}</h2> 
            <div className="game-card-body">
                <p>Catégorie: {props.categorie}</p>
                <p>Durée: {props.duree} min</p>
                <p>Joueurs: {props.joueurMin}-{props.joueurMax}</p>
            </div>
            {isLoggedIn && (
            <div className="game-card-buttons">               
                <button className="game-card-button-modify">Modifier</button>
                <button className="game-card-button-delete">Supprimer</button>
            </div>
        )}
        </div>
    );
}

export default GameCard;
