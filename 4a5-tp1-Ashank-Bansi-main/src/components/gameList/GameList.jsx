import { useState, useEffect } from "react";
import gameList from "../../data/gameList"; 
import GameCard from "../gameCard/GameCard";
import "./GameList.css";

export default function GameList() {
    const [games, setGames] = useState([...gameList]); //Copie locale des jeux

    useEffect(() => {
        // Vérifier s'il y a de nouveaux jeux stockés
        const storedGames = JSON.parse(sessionStorage.getItem("games")) || [...gameList];
        setGames(storedGames);
    }, []);

    const deleteGameHandler = (gameId) => {
        const updatedGames = games.filter(game => game.id !== gameId);
        setGames(updatedGames);
        sessionStorage.setItem("games", JSON.stringify(updatedGames)); //Sauvegarde temporaire
    };

    return (
        <div>
            <h2>Liste des jeux</h2>
            <ul className="game-list">
                {games.map((game) => (
                    <li key={game.id}>
                        <GameCard {...game} onDelete={deleteGameHandler} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
