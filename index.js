// Εμφάνιση του modal μόλις φορτωθεί η σελίδα
window.onload = function () {
    const modal = document.getElementById("sponsor-modal");
    modal.style.display = "flex"; // Ενεργοποίηση modal

    // Κλείσιμο του modal όταν κάνεις κλικ στο φόντο
    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };
};

// Κλείσιμο του modal
function closeModal() {
    const modal = document.getElementById("sponsor-modal");
    modal.style.display = "none"; // Απόκρυψη modal
}
