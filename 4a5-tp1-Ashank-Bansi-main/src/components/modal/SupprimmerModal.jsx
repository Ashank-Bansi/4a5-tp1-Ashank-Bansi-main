import React from 'react'; 
import '../SupressionModal/SupressionModal.css'

function SuppressionModal({ onClose, onConfirm }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirmer la suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer ce jeu ? Cette action est irréversible.</p>
        <button onClick={onClose}>Annuler</button>
        <button onClick={onConfirm}>Confirmer</button>
      </div>
    </div>
  );
}

export default SuppressionModal;
