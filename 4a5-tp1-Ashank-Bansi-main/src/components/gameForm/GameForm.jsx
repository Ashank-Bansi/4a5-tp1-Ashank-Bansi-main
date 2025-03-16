import './GameForm.css';
import { useState } from 'react';

const GameForm = ({ onAddGame }) => {
    const [enteredValues, setEnteredValues] = useState({
        name: "",
        categorie: "",
        joueurMin: "",
        joueurMax: "",
        duree: "",
    });

    function addGameSubmitHandler(event) {
        event.preventDefault();
        const newGame = {
            name: enteredValues.name,
            categorie: enteredValues.categorie,
            joueurMin: parseInt(enteredValues.joueurMin, 10),
            joueurMax: parseInt(enteredValues.joueurMax, 10),
            duree: parseInt(enteredValues.duree, 10),
        };

        onAddGame(newGame);

        setEnteredValues({ name: "", categorie: "", joueurMin: "", joueurMax: "", duree: "" });
    }

    const handleInputChange = (identifier, value) => {
        setEnteredValues((prevValue) => ({
            ...prevValue,
            [identifier]: value,
        }));
    };

    return (
        <form onSubmit={addGameSubmitHandler} className="game-form">
            <h2>Ajouter un Jeu</h2>

            <div className="control">
                <label htmlFor="name">Titre</label>
                <input
                    id="name"
                    type="text"
                    name="name"
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
                    name="categorie"
                    value={enteredValues.categorie}
                    onChange={(event) => handleInputChange("categorie", event.target.value)}
                    required
                >
                    <option value="">Choisir une catégorie</option>
                    <option value="Stratégie">Stratégie</option>
                    <option value="Famille">Famille</option>
                    <option value="Enfant">Enfant</option>
                </select>
            </div>

            <div className="control">
                <label>Nombre de joueurs</label>
                <input
                    id="nbJoueur"
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
                    id="duree"
                    type="number"
                    name="duree"
                    value={enteredValues.duree}
                    onChange={(event) => handleInputChange("duree", event.target.value)}
                    placeholder="60"
                    min="1"
                    required
                />
            </div>

            <div className="form-actions">
                <button type="submit">Enregistrer</button>
            </div>
        </form>
    );
};

export default GameForm;
