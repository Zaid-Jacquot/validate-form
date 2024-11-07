const button = document.getElementById('submitButton');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');

// Fonction de modal
function showModal(message, isSuccess) {
    modal.style.display = 'flex';
    modalMessage.textContent = message;
    if (isSuccess) {
        modalContent.classList.add('success');
        modalContent.classList.remove('error');
    } else {
        modalContent.classList.add('error');
        modalContent.classList.remove('success');
    }
}

// Event pour fermer le modal par "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

button.addEventListener('click', () => {
    const reponse_un = document.getElementById('reponse_un').value;
    const reponse_deux = document.getElementById('reponse_deux').value;
    const reponse_trois = document.getElementById('reponse_trois').value;
    const reponse_quatre = document.getElementById('reponse_quatre').value;
    const reponse_cinq = document.getElementById('reponse_cinq').value;
    const reponse_six = document.getElementById('reponse_six').value;
    const reponse_sept = document.getElementById('reponse_sept').value;

    // Condtion s'il y a des champs qui ne sont pas encore remplis
    if (
        (reponse_un && !reponse_deux && !reponse_trois) ||
        (!reponse_un && reponse_deux && !reponse_trois) ||
        (!reponse_un && !reponse_deux && reponse_trois) ||
        (!reponse_un && !reponse_deux && !reponse_trois && reponse_quatre) ||
        (!reponse_un && !reponse_deux && !reponse_trois && !reponse_quatre && reponse_cinq) ||
        (!reponse_un && !reponse_deux && !reponse_trois && !reponse_quatre && !reponse_cinq && !reponse_six) ||
        (!reponse_un && !reponse_deux && !reponse_trois && !reponse_quatre && !reponse_cinq && !reponse_six && reponse_sept)
    ) {
        showModal("Il y a encore des champs qui ne sont pas remplis", false);
    } else if (
        (reponse_un && reponse_deux && !reponse_trois) ||
        (reponse_un && !reponse_deux && reponse_trois) ||
        (!reponse_un && reponse_deux && reponse_trois) ||
        (reponse_un && reponse_deux && reponse_trois && !reponse_quatre) ||
        (reponse_un && reponse_deux && reponse_trois && reponse_quatre && !reponse_cinq) ||
        (reponse_un && reponse_deux && reponse_trois && reponse_quatre && reponse_cinq && !reponse_six) ||
        (reponse_un && reponse_deux && reponse_trois && reponse_quatre && reponse_cinq && reponse_six && !reponse_sept)
    ) {
        showModal("Il reste encore de(s) champ(s) qui n'est (sont) pas encore rempli", false);
    } else if (!reponse_un && !reponse_deux && !reponse_trois && !reponse_quatre) {
        showModal("Veuillez répondre aux questions parmi les trois propositions", false);
    } else {
        showModal("OK ! Tous les champs sont bien remplis", true);
    }
});
