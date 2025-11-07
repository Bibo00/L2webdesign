// Attende che il documento HTML sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleziona il pulsante hamburger e il contenitore dei link
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Assicurati che entrambi gli elementi esistano
    if (hamburger && navLinks) {
        
        // Aggiungi un ascoltatore per l'evento "click"
        hamburger.addEventListener('click', () => {
            
            // Aggiunge/rimuove la classe 'nav-active' al menu
            navLinks.classList.toggle('nav-active');
            
            // Aggiunge/rimuove la classe 'is-active' al pulsante (per l'animazione a 'X')
            hamburger.classList.toggle('is-active');
        });
    }
});