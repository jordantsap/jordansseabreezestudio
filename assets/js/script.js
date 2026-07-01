document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MOBILE HAMBURGER MENU
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

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
    }

    // ==========================================
    // 2. DYNAMIC HERO SLIDESHOW (.jpg πλέον όλες!)
    // ==========================================
    const heroSection = document.getElementById('hero');
    
    const heroImages = [
        'images/hero/hero-01.jpg',
        'images/hero/hero-02.jpg',
        'images/hero/hero-03.jpg',
        'images/hero/hero-04.jpg',
        'images/hero/hero-05.jpg'
    ];
    
    let currentHeroIndex = 0;

    function changeHeroBackground() {
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        if (heroSection) {
            heroSection.style.backgroundImage = `linear-gradient(rgba(2, 48, 71, 0.5), rgba(2, 48, 71, 0.3)), url('${heroImages[currentHeroIndex]}')`;
        }
    }

    if (heroSection) {
        setInterval(changeHeroBackground, 5000);
    }

    // ==========================================
    // 3. LIGHTBOX MODAL
    // ==========================================
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(img => {
        img.addEventListener('click', () => {
            if (modal && modalImg) {
                modal.style.display = "block";
                modalImg.src = img.src;
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal && modal.style.display === "block") {
            closeModal();
        }
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
            document.body.style.overflow = 'auto';
        }
    }
});
