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

/**
 * Jordan's Sea Breeze Studio - Core Javascript Engine
 * Includes: Multi-language Support (i18n), Dynamic Auto-Slideshows, Lightbox Gallery
 */

// ==========================================================================
// 1. ΔΟΜΗ ΜΕΤΑΦΡΑΣΕΩΝ (Translations Dictionary)
// ==========================================================================
// Για να προσθέσεις γλώσσα (π.χ. ru, bg), φτιάχνεις ένα νέο αντικείμενο με τα ίδια ακριβώς keys.
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_rooms: "Spaces", nav_amenities: "Amenities", nav_gallery: "Gallery", nav_location: "Location", nav_book: "Book Now",
        hero_title: "The Ultimate Escape by the Sea", hero_subtitle: "Experience comfort and relaxation in Nea Karvali, Kavala.", hero_btn_explore: "Explore Spaces",
        booking_title: "Direct Booking via:", booking_direct: "Message",
        about_title: "Welcome to Jordan's Sea Breeze Studio", about_description: "A fully equipped space designed to offer a warm, relaxing, and premium accommodation experience next to the sea.",
        meta_checkin: "<strong>Check-in:</strong> Flexible (upon communication)", meta_checkout: "<strong>Check-out:</strong> Until 12:00 (Noon)", meta_languages: "<strong>Languages:</strong> English, Greek",
        rooms_header_title: "Our Spaces", rooms_header_subtitle: "Discover every corner of the studio, designed for ultimate functionality",
        room_bedroom_title: "Master Bedroom", room_bedroom_desc: "Comfortable bed with extra pillows and premium linens for a restful sleep.",
        room_balcony_title: "Private Balcony", room_balcony_desc: "Private outdoor area to enjoy your morning coffee with the sea breeze.",
        room_living_title: "Living Room", room_living_desc: "Bright, comfortable relaxation area with a Smart TV for your entertainment.",
        amenities_title: "Amenities & Comforts", am_ac: "Air Conditioning", am_tv: "Smart TV", am_wifi: "Free Wi-Fi", am_washer: "Washing Machine", am_parking: "Free Parking",
        gallery_title: "Photos", contact_title: "Contact Us", form_name: "Full Name", form_email: "Email Address", form_msg: "Your message or preferred dates...", form_btn: "Send Message"
    },
    el: {
        nav_home: "Αρχική", nav_about: "Το Κατάλυμα", nav_rooms: "Χώροι", nav_amenities: "Παροχές", nav_gallery: "Φωτογραφίες", nav_location: "Τοποθεσία", nav_book: "Κράτηση Τώρα",
        hero_title: "Η Απόλυτη Απόδραση Δίπλα στο Κύμα", hero_subtitle: "Ζήστε την εμπειρία της άνεσης και της χαλάρωσης στη Νέα Καρβάλη Καβάλας.", hero_btn_explore: "Περιήγηση στους Χώρους",
        booking_title: "Άμεση Κράτηση μέσω:", booking_direct: "Μήνυμα",
        about_title: "Καλωσήρθατε στο Jordan's Sea Breeze Studio", about_description: "Ένας πλήρως εξοπλισμένος χώρος, σχεδιασμένος για να προσφέρει μια ζεστή, ξεκούραστη και premium εμπειρία διαμονής δίπλα στη θάλασσα.",
        meta_checkin: "<strong>Check-in:</strong> Ευέλικτο (κατόπιν συνεννόησης)", meta_checkout: "<strong>Check-out:</strong> Έως τις 12:00 (Μεσημέρι)", meta_languages: "<strong>Γλώσσες:</strong> Ελληνικά, English",
        rooms_header_title: "Οι Χώροι μας", rooms_header_subtitle: "Ανακαλύψτε κάθε γωνιά του studio, διαμορφωμένη για την απόλυτη λειτουργικότητα",
        room_bedroom_title: "Υπνοδωμάτιο", room_bedroom_desc: "Αναπαυτικό κρεβάτι με extra μαξιλάρια και premium λευκά είδη για έναν ξεκούραστο ύπνο.",
        room_balcony_title: "Ιδιωτικό Μπαλκόνι", room_balcony_desc: "Ιδιωτικός εξωτερικός χώρος για να απολαμβάνετε τον πρωινό καφέ σας με τη θαλασσινή αύρα.",
        room_living_title: "Σαλόνι", room_living_desc: "Φωτεινός, άνετος χώρος χαλάρωσης με Smart TV για την ψυχαγωγία σας.",
        amenities_title: "Παροχές & Ανέσεις", am_ac: "Κλιματισμός (A/C)", am_tv: "Smart TV", am_wifi: "Δωρεάν Wi-Fi", am_washer: "Πλυντήριο Ρούχων", am_parking: "Δωρεάν Parking",
        gallery_title: "Φωτογραφίες", contact_title: "Επικοινωνία", form_name: "Ονοματεπώνυμο", form_email: "Email Διεύθυνση", form_msg: "Γράψτε το μήνυμά σας ή τις ημερομηνίες ενδιαφέροντος...", form_btn: "Αποστολή Μηνύματος"
    },
    bg: {
        nav_home: "Начало", nav_about: "За Нас", nav_rooms: "Стаи", nav_amenities: "Удобства", nav_gallery: "Галерия", nav_location: "Местоположение", nav_book: "Резервирай",
        hero_title: "Перфектното бягство край морето", hero_subtitle: "Насладете се на комфорт и релакс в Неа Карвали, Кавала.", hero_btn_explore: "Разгледайте стаите",
        booking_title: "Директна резервация чрез:", booking_direct: "Съобщение",
        about_title: "Добре дошли в Jordan's Sea Breeze Studio", about_description: "Напълно оборудвано пространство, проектирано да предложи топло, релаксиращо и първокласно изживяване до морето.",
        meta_checkin: "<strong>Check-in:</strong> Гъвкаво (след комуникация)", meta_checkout: "<strong>Check-out:</strong> До 12:00 ч.", meta_languages: "<strong>Езици:</strong> Английски, Гръцки",
        rooms_header_title: "Нашите пространства", rooms_header_subtitle: "Открийте всеки ъгъл на студиото, проектиран за максимална функционалност",
        room_bedroom_title: "Основна спалня", room_bedroom_desc: "Удобно легло с допълнителни възглавници и спално бельо премиум клас за спокоен сън.",
        room_balcony_title: "Частен балкон", room_balcony_desc: "Частна външна зона, където да се насладите на сутрешното си кафе с морския бриз.",
        room_living_title: "Всекидневна", room_living_desc: "Светла и удобна зона за релакс със Smart TV за вашето забавление.",
        amenities_title: "Удобства и комфорт", am_ac: "Климатик", am_tv: "Smart TV", am_wifi: "Безплатен Wi-Fi", am_washer: "Пералня", am_parking: "Безплатен паркинг",
        gallery_title: "Снимки", contact_title: "Свържете се с нас", form_name: "Име и фамилия", form_email: "Имейл адрес", form_msg: "Вашето съобщение или предпочитани дати...", form_btn: "Изпрати съобщение"
    },
    ru: {
        nav_home: "Главная", nav_about: "О нас", nav_rooms: "Номера", nav_amenities: "Удобства", nav_gallery: "Галерея", nav_location: "Расположение", nav_book: "Забронировать",
        hero_title: "Идеальный побег у моря", hero_subtitle: "Испытайте комфорт и расслабление в Неа Карвали, Кавала.", hero_btn_explore: "Посмотреть комнаты",
        booking_title: "Прямое бронирование через:", booking_direct: "Сообщение",
        about_title: "Добро пожаловать в Jordan's Sea Breeze Studio", about_description: "Полностью оборудованное пространство, созданное для того, чтобы предложить теплый, расслабляющий и первоклассный отдых у моря.",
        meta_checkin: "<strong>Check-in:</strong> Гибкий (по договоренности)", meta_checkout: "<strong>Check-out:</strong> До 12:00 (Полдень)", meta_languages: "<strong>Языки:</strong> Английский, Греческий",
        rooms_header_title: "Наши пространства", rooms_header_subtitle: "Откройте для себя каждый уголок студии, созданный для максимальной функциональности",
        room_bedroom_title: "Главная спальня", room_bedroom_desc: "Удобная кровать с дополнительными подушками и постельным бельем премиум-класса для спокойного сна.",
        room_balcony_title: "Частный балкон", room_balcony_desc: "Уютная зона на свежем воздухе, где можно насладиться утренним кофе с морским бризом.",
        room_living_title: "Гостиная", room_living_desc: "Светлая, комфортная зона отдыха со Smart TV для вашего развлечения.",
        amenities_title: "Удобства и комфорт", am_ac: "Кондиционер", am_tv: "Smart TV", am_wifi: "Бесплатный Wi-Fi", am_washer: "Стиральная машина", am_parking: "Бесплатная парковка",
        gallery_title: "Фотографии", contact_title: "Связаться с нами", form_name: "Имя и фамилия", form_email: "Email адрес", form_msg: "Ваше сообщение или желаемые даты...", form_btn: "Отправить сообщение"
    }
};

// Функция αλλαγής γλώσσας στην οθόνη
function setLanguage(lang) {
    // 1. Αλλαγή απλών κειμένων (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // 2. Αλλαγή Placeholders σε φόρμες (data-i18n-holder)
    document.querySelectorAll('[data-i18n-holder]').forEach(element => {
        const key = element.getAttribute('data-i18n-holder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Αποθήκευση της προτίμησης του χρήστη στο browser
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
}


// ==========================================================================
// 2. ΜΗΧΑΝΙΣΜΟΣ ΑΥΤΟΜΑΤΩΝ SLIDESHOWS (Dynamic Slideshow Engine)
// ==========================================================================
function initDynamicSlideshows() {
    
    // --- ΚΑΤΗΓΟΡΙΑ Α: Slideshows ως Φόντο (π.χ. Hero Section) ---
    document.querySelectorAll('.auto-slideshow-bg').forEach(section => {
        const folder = section.getAttribute('data-folder'); // π.χ. "images/hero/hero"
        const total = parseInt(section.getAttribute('data-total')); // π.kh. 5
        const ext = section.getAttribute('data-ext') || 'jpg'; // Κατάληξη αρχείου
        
        let currentIndex = 1;

        // Συνάρτηση αλλαγής του background με linear-gradient overlay
        function rotateBackground() {
            let imgNum = String(currentIndex).padStart(2, '0');
            section.style.backgroundImage = `linear-gradient(rgba(2, 48, 71, 0.5), rgba(2, 48, 71, 0.3)), url('${folder}-${imgNum}.${ext}')`;
            currentIndex = (currentIndex % total) + 1;
        }
        
        rotateBackground(); // Εκκίνηση πρώτης εικόνας
        setInterval(rotateBackground, 5000); // Αλλαγή ανά 5 δευτερόλεπτα
    });

    // --- ΚΑΤΗΓΟΡΙΑ Β: Slideshows Μέσα σε Κάρτες/Containers (π.χ. Δωμάτια) ---
    document.querySelectorAll('.auto-slideshow-img').forEach(container => {
        const folder = container.getAttribute('data-folder'); // π.χ. "images/rooms/bedroom/bedroom"
        const total = parseInt(container.getAttribute('data-total'));
        const ext = container.getAttribute('data-ext') || 'png';

        // Δημιουργούμε το δυναμικό <img> tag μέσα στο HTML container
        const imgElement = document.createElement('img');
        imgElement.classList.add('lightbox-trigger');
        imgElement.alt = "Property Space";
        container.appendChild(imgElement);

        let currentIndex = 1;

        function rotateImage() {
            let imgNum = String(currentIndex).padStart(2, '0');
            // Fade out εφέ πριν αλλάξει η εικόνα για ομαλότητα
            imgElement.style.opacity = 0.3;
            
            setTimeout(() => {
                imgElement.src = `${folder}-${imgNum}.${ext}`;
                imgElement.style.opacity = 1;
            }, 250);

            currentIndex = (currentIndex % total) + 1;
        }

        rotateImage(); // Φόρτωση πρώτης φωτό
        
        // Αν το δωμάτιο έχει πάνω από 1 φωτογραφία, ξεκινάει το αυτόματο slideshow
        if (total > 1) {
            setInterval(rotateImage, 4000); // Αλλαγή ανά 4 δευτερόλεπτα
        }
    });
}


// ==========================================================================
// 3. EVENT LISTENERS & LIGHTBOX INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Setup Γλώσσας ---
    const langSelect = document.getElementById('langSelect');
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }
    setLanguage(savedLang); // Ενεργοποίηση γλώσσας κατά το load

    // --- Εκκίνηση Slideshows ---
    initDynamicSlideshows();

    // --- Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    }

    // --- Lightbox / Fullscreen Modal (Λειτουργεί και με τα δυναμικά images) ---
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');

    // Χρησιμοποιούμε Event Delegation επειδή οι εικόνες των δωματίων δημιουργούνται δυναμικά από τη JS
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox-trigger') && modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            setTimeout(() => modal.classList.add('show'), 10);
            document.body.style.overflow = 'hidden';
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modal && modal.style.display === "block") closeModal();
    });

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = "none", 300);
        document.body.style.overflow = 'auto';
    }
});
