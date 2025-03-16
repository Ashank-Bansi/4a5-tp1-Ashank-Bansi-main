import { useState, useContext } from "react";
import { gameList } from "../../data/gameList";
import GameCard from "../gameCard/GameCard";
import "./GameList.css";

export default function GameList() {
    const [games, setGames] = useState(gameList);

    return (
        <div>
            <h2>Liste des jeux</h2>
            <ul className="game-list">
                {games.map((game) => (
                    <li key={game.id}>
                        <GameCard {...game} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
