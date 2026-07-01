document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Αλλαγή εικονιδίου από bars σε X
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Κλείσιμο του μενού όταν πατηθεί κάποιο link (για mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
});
