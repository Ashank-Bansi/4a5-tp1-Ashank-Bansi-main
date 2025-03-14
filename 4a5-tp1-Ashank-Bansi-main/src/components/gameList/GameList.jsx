import GameCard from "../gameCard/GameCard";
import "./GameList.css";
import { gameList } from "../../data/gameList"

export default function GameList() {

    console.log(gameList);
    return (
        <div>
            <ul className="game-list">
                {gameList.map((game) => (
                    <li key={game.id}>
                        <GameCard {...game} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
