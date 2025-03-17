import "./GameForm.css";
import gameList from "../../data/gameList"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const GameForm = () => {
    const navigate = useNavigate();
    const [enteredValues, setEnteredValues] = useState({
        name: "",
        categorie: "",
        joueurMin: "",
        joueurMax: "",
        duree: "",
        cover: "",
    });

    const addGameSubmitHandler = (event) => {
        event.preventDefault();

        const newGame = {
            id: Date.now(), // Générer un ID unique
            name: enteredValues.name,
            categorie: enteredValues.categorie,
            joueurMin: parseInt(enteredValues.joueurMin, 10),
            joueurMax: parseInt(enteredValues.joueurMax, 10),
            duree: parseInt(enteredValues.duree, 10),
            cover: enteredValues.cover,
        };

        
        gameList.push(newGame);

        // Redirection vers la liste des jeux
        navigate("/games");
    };

    const handleInputChange = (identifier, value) => {
        setEnteredValues((prevValue) => ({
            ...prevValue,
            [identifier]: value,
        }));
    };

    return (
        <form onSubmit={addGameSubmitHandler}>
            <h2>Ajouter un Jeu</h2>
            <div className="control">
                <label htmlFor="name">Nom du jeu</label>
                <input
                    id="name"
                    type="text"
                    value={enteredValues.name}
                    placeholder="Exemple : Catan"
                    onChange={(event) => handleInputChange("name", event.target.value)}
                    required
                />
            </div>

            <div className="control">
                <label htmlFor="categorie">Catégorie</label>
                <select
                    id="categorie"
                    value={enteredValues.categorie}
                    onChange={(event) => handleInputChange("categorie", event.target.value)}
                    required
                >
                    <option value="Stratégie">Stratégie</option>
                    <option value="Famille">Famille</option>
                    <option value="Coopératif">Coopératif</option>
                </select>
            </div>

            <div className="control">
                <label>Nombre de joueurs</label>
                <input
                    type="text"
                    value={`${enteredValues.joueurMin}-${enteredValues.joueurMax}`}
                    placeholder="Exemple : 3-4"
                    onChange={(e) => {
                        const [min, max] = e.target.value.split('-');
                        handleInputChange("joueurMin", min);
                        handleInputChange("joueurMax", max);
                    }}
                    required
                />
            </div>

            <div className="control">
                <label>Durée (en minutes)</label>
                <input
                    type="number"
                    value={enteredValues.duree}
                    placeholder="Exemple : 60"
                    onChange={(event) => handleInputChange("duree", event.target.value)}
                    required
                />
            </div>

            <button type="submit">Enregistrer</button>
        </form>
    );
};

export default GameForm;
