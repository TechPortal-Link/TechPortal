document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const submenus = document.querySelectorAll('.submenu');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Impediamo la propagazione per non attivare il listener del documento
            e.stopPropagation();

            const targetId = button.getAttribute('data-target');
            const targetSubmenu = document.getElementById(targetId);

            // Se il menu cliccato è già aperto, lo chiudiamo
            const isAlreadyActive = targetSubmenu.classList.contains('active');

            // Chiudi tutti i sottomenu aperti
            closeAllSubmenus();

            // Se non era attivo, lo apriamo
            if (!isAlreadyActive) {
                targetSubmenu.classList.add('active');
            }
        });
    });

    // Funzione per chiudere tutti i sottomenu
    function closeAllSubmenus() {
        submenus.forEach(menu => {
            menu.classList.remove('active');
        });
    }

    // Cliccando in qualsiasi punto fuori dal menu, chiudiamo i sottomenu
    document.addEventListener('click', () => {
        closeAllSubmenus();
    });
});