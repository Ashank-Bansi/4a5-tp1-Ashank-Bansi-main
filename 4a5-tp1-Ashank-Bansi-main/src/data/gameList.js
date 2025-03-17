import imgCatan from "../assets/CoverStrategie.png";
import imgPandemic from "../assets/CoverCoop.png";
import img7Wonders from "../assets/CoverFamille.png";

 const gameList = [
    {
        name: "Catan",
        id: "jeuCatan",
        categorie: "Stratégie",
        cover: imgCatan,
        joueurMin: 3,
        joueurMax: 4,
        duree: 60
    },
    {
        name: "Pandemic",
        id: "jeuPandemic",
        categorie: "Coopératif",
        cover: imgPandemic,
        joueurMin: 2,
        joueurMax: 4,
        duree: 45
    },
    {
        name: "7 Wonders",
        id: "jeu7Wonders",
        categorie: "Famille",
        cover: img7Wonders,
        joueurMin: 2,
        joueurMax: 7,
        duree: 30 
    }
];

export default gameList;
