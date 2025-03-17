import React, { useState } from 'react';
import './ModifyModal.css';

function ModifierModal({ game, onClose, onUpdate }) {
  const [name, setName] = useState(game.name);
  const [categorie, setCategorie] = useState(game.categorie);
  const [duree, setDuree] = useState(game.duree);
  const [players, setPlayers] = useState(`${game.joueurMin}-${game.joueurMax}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [joueurMin, joueurMax] = players.split('-').map(num => parseInt(num));

    onUpdate(game.id, {
      name,
      categorie,
      duree: parseInt(duree, 10),
      joueurMin,
      joueurMax
    });

    onClose();
  };

  return (
    <div className="modifier-modal">
      <form onSubmit={handleSubmit} className="modifier-modal-content">
        <h2>Modifier un Jeu</h2>
        <label>Titre</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Catégorie</label>
        <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
          <option value="Stratégie">Stratégie</option>
          <option value="Famille">Famille</option>
          <option value="Coopératif">Coopératif</option>
        </select>

        <label>Nombre de joueurs (min-max)</label>
        <input value={players} onChange={(e) => setPlayers(e.target.value)} />

        <label>Durée (en minutes)</label>
        <input type="number" value={duree} onChange={(e) => setDuree(e.target.value)} />

        <div className="modifier-modal-buttons">
          <button className="enregistrer-button">Mettre à jour</button>
          <button className="annuler-button" type="button" onClick={onClose}>Annuler</button>
        </div>
      </form>
    </div>
  );
}

export default ModifierModal;
