import "./GameIcon.css";
import imgStrategie from "../../assets/CoverStrategie.png";
import imgCoop from "../../assets/CoverCoop.png";
import imgFamille from "../../assets/CoverFamille.png";

export default function GameIcon({ categorie }) {
    const icons = {
        Stratégie: imgStrategie,
        Coopératif: imgCoop,
        Famille: imgFamille
    };

    return <img src={icons[categorie] || imgStrategie} alt={categorie} className="gameIcon-cover" />;
}
