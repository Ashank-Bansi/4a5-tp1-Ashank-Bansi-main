import GameIcon from "../gameIcon/GameIcon";
import "./GameCard.css";

function GameCard(props) { 
    return (
        <div className="game-card">
            <div className="game-card-header">
                <GameIcon cover={props.cover} />
                <span className="game-card-name">{props.name}</span>
            </div>
            <div className="game-card-body">
                <p>Catégorie: {props.categorie}</p>
                <p>Durée: {props.duree} min</p>
                <p>Joueurs: {props.joueurMin}-{props.joueurMax}</p>
            </div>
            <div className="game-card-buttons">
                <button className="game-card-button-modify">Modifier</button>
                <button className="game-card-button-delete">Supprimer</button>
            </div>
        </div>
    );
}

export default GameCard;