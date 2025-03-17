import { useState } from "react";
import gameList from "../../data/gameList"; 
import GameCard from "../gameCard/GameCard";
import "./GameList.css";

export default function GameList() {
    const [games, setGames] = useState([...gameList]); // Copie locale des jeux

    const deleteGame = (gameId) => {
        const index = gameList.findIndex(game => game.id === gameId);
        if (index !== -1) {
            gameList.splice(index, 1); // Supprime aussi du tableau global
        }
        setGames(games.filter(game => game.id !== gameId)); // Mise à jour de l'affichage
    };

    const updateGame = (id, updatedGame) => {
        // Met à jour gameList
        const index = gameList.findIndex(game => game.id === id);
        if (index !== -1) {
            gameList[index] = { ...gameList[index], ...updatedGame };
        }

        // Met à jour l'affichage
        setGames(games.map(game => (game.id === id ? { ...game, ...updatedGame } : game)));
    };

    return (
        <div>
            <h2>Liste des jeux</h2>
            <ul className="game-list">
                {games.map((game) => (
                    <li key={game.id}>
                        <GameCard 
                            {...game} 
                            onDelete={deleteGame}
                            onUpdate={updateGame} 
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
