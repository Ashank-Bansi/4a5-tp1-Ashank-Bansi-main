import "./GameForm.css";
import GAMES from "../../data/gameList.js"; // Base de données locale
import { useState } from "react";

const GameForm = () => {
    const [enteredValues, setEnteredValues] = useState({
        name: "",
        categorie: "",
        joueurMin: "",
        joueurMax: "",
        duree: "",
        cover: "",
    });

    function addGameSubmitHandler(event) {
        event.preventDefault();

        const newGame = {
            id: "jeuTest1",
            name: enteredValues.name,
            categorie: enteredValues.categorie,
            joueurMin: parseInt(enteredValues.joueurMin, 10),
            joueurMax: parseInt(enteredValues.joueurMax, 10),
            duree: parseInt(enteredValues.duree, 10),
            cover: enteredValues.cover,
        };

        GAMES.push(newGame);
        console.log(GAMES);

        setEnteredValues({ name: "", categorie: "", joueurMin: "", joueurMax: "", duree: "", cover: "" });
    }

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
                    onChange={(event) => handleInputChange("name", event.target.value)}
                    placeholder="Exemple : Catan"
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
                    placeholder="3-4"
                    onChange={(event) => {
                        const [min, max] = event.target.value.split('-');
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
                    onChange={(event) => handleInputChange("duree", event.target.value)}
                    placeholder="60"
                    min="1"
                    required
                />
            </div>

            <div className="control">

                <p className="form-actions">
                    <button type="submit" className="button">
                        Enregistrer
                    </button>
                </p>

            </div>

        </form>
    );
};

export default GameForm;
