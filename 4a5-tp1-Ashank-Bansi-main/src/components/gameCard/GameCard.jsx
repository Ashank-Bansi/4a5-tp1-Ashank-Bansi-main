import { useContext, useState } from "react";
import GameIcon from "../gameIcon/GameIcon";
import "./GameCard.css";
import { AuthContext } from "../authContext/AuthContext";
import SuppressionModal from "../modal/SupprimerModal";
import ModifierModal from "../modal/ModifyModal";

function GameCard(props) {
    const { isLoggedIn } = useContext(AuthContext);
    const [suppressionModal, setSuppressionModal] = useState(false);
    const [modifyModal, setModifyModal] = useState(false)

    const handleDeleteClick = () => {
        setSuppressionModal(true);
    };

    const handleModifyClick = () => {
        setModifyModal(true);
    };

    return (
        <div className="game-card">
            <div className="game-card-header">
                <GameIcon categorie={props.categorie} />
            </div>
            <h2 className="game-card-name">{props.name}</h2>
            <div className="game-card-body">
                <p>Catégorie: {props.categorie}</p>
                <p>Durée: {props.duree} min</p>
                <p>Joueurs: {props.joueurMin}-{props.joueurMax}</p>
            </div>
            {isLoggedIn && (
                <div className="game-card-buttons">
                    <button onClick={handleModifyClick} className="game-card-button-modify">Modifier</button>
                    <button onClick={handleDeleteClick} className="game-card-button-delete">Supprimer</button>
                </div>
            )}
            {suppressionModal && (
                <SuppressionModal
                    onClose={() => setSuppressionModal(false)}
                    onConfirm={() => {
                        props.onDelete(props.id); 
                        setSuppressionModal(false); 
                    }}
                />
            )}
            {modifyModal && (
                <ModifierModal
                    game={props}
                    onClose={() => setModifyModal(false)}
                    onUpdate={props.onUpdate}
                />
            )}
        </div>
    );
}

export default GameCard;
