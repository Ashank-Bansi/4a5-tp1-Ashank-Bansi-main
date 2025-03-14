import "./GameIcon.css";

export default function GameIcon(props) {
    return <img src={props.cover} alt="Image du jeu" className="game-icon-cover" />;
}