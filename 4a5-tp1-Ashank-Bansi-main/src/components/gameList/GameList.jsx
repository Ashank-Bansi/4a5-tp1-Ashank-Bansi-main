import { useState } from "react";
import { gameList } from "../../data/gameList";
import GameCard from "../gameCard/GameCard";
import GameForm from "../gameForm/GameForm"

export default function GameList() {
    const [games, setGames] = useState(gameList);

    const handleAddGame = (newGame) => {
        setGames((prevGames) => [...prevGames, newGame]);
    };

    return (
        <div>
            <GameForm onAddGame={handleAddGame} />
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
