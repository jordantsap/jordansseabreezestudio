/**
 * Jordan's Sea Breeze Studio - Core Javascript Engine
 */

// ==========================================================================
// 1. ΔΟΜΗ ΜΕΤΑΦΡΑΣΕΩΝ (Translations Dictionary)
// ==========================================================================
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_rooms: "Spaces", nav_amenities: "Amenities", nav_gallery: "Gallery", nav_location: "Location", nav_book: "Book Now",
        hero_title: "The Ultimate Escape by the Sea", hero_subtitle: "Experience comfort and relaxation in Nea Karvali, Kavala.", hero_btn_explore: "Explore Spaces",
        booking_title: "Direct Booking via:", booking_direct: "Message",
        about_title: "Welcome to Jordan's Sea Breeze Studio", about_description: "A fully equipped space designed to offer a warm, relaxing, and premium accommodation experience next to the sea.",
        meta_checkin: "<strong>Check-in:</strong> Flexible (upon communication)", meta_checkout: "<strong>Check-out:</strong> Until 12:00 (Noon)", meta_rules: "<strong>House Rules:</strong> No smoking, No parties, No pets",
        rooms_header_title: "Our Spaces", rooms_header_subtitle: "Discover every corner of the studio, designed for ultimate functionality",
        room_bedroom_title: "Master Bedroom", room_bedroom_desc: "Comfortable bed with extra pillows and premium linens for a restful sleep.",
        room_balcony_title: "Private Balcony", room_balcony_desc: "Private outdoor area to enjoy your morning coffee with the sea breeze.",
        room_living_title: "Living Room", room_living_desc: "Bright, comfortable relaxation area with a Smart TV for your entertainment.",
        room_kitchen_title: "Kitchen", room_kitchen_desc: "Fully equipped kitchen with oven, refrigerator, toaster, and coffee maker.",
        room_bathroom_title: "Bathroom", room_bathroom_desc: "Modern bathroom equipped with a washing machine and essentials.",
        amenities_title: "Amenities & Comforts", am_ac: "Air Conditioning", am_tv: "Smart TV", am_wifi: "Free Wi-Fi", am_washer: "Washing Machine", am_oven: "Oven & Stoves", am_fridge: "Refrigerator", am_toaster: "Toaster", am_parking: "Free Parking", am_fire: "Fire Extinguisher", am_firstaid: "First Aid Kit", am_pillows: "Extra Pillows",
        gallery_title: "Gallery & Highlights", gallery_subtitle: "Best photos of our property, the local beach, and nearby attractions like Kavala",
        contact_title: "Contact Us", form_name: "Full Name", form_email: "Email Address", form_msg: "Your message or preferred dates...", form_btn: "Send Message"
    },
    el: {
        nav_home: "Αρχική", nav_about: "Το Κατάλυμα", nav_rooms: "Χώροι", nav_amenities: "Παροχές", nav_gallery: "Φωτογραφίες", nav_location: "Τοποθεσία", nav_book: "Κράτηση Τώρα",
        hero_title: "Η Απόλυτη Απόδραση Δίπλα στο Κύμα", hero_subtitle: "Ζήστε την εμπειρία της άνεσης και της χαλάρωσης στη Νέα Καρβάλη Καβάλας.", hero_btn_explore: "Περιήγηση στους Χώρους",
        booking_title: "Άμεση Κράτηση μέσω:", booking_direct: "Μήνυμα",
        about_title: "Καλωσήρθατε στο Jordan's Sea Breeze Studio", about_description: "Ένας πλήρως εξοπλισμένος χώρος, σχεδιασμένος για να προσφέρει μια ζεστή, ξεκούραστη και premium εμπειρία διαμονής δίπλα στη θάλασσα.",
        meta_checkin: "<strong>Check-in:</strong> Ευέλικτο (κατόπιν συνεννόησης)", meta_checkout: "<strong>Check-out:</strong> Έως τις 12:00 (Μεσημέρι)", meta_rules: "<strong>Κανόνες:</strong> Όχι κάπνισμα, Όχι πάρτι, Όχι κατοικίδια",
        rooms_header_title: "Οι Χώροι μας", rooms_header_subtitle: "Ανακαλύψτε κάθε γωνιά του studio, διαμορφωμένη για την απόλυτη λειτουργικότητα",
        room_bedroom_title: "Υπνοδωμάτιο", room_bedroom_desc: "Αναπαυτικό κρεβάτι με extra μαξιλάρια και premium λευκά είδη για έναν ξεκούραστο ύπνο.",
        room_balcony_title: "Ιδιωτικό Μπαλκόνι", room_balcony_desc: "Ιδιωτικός εξωτερικός χώρος για να απολαμβάνετε τον πρωινό καφέ σας με τη θαλασσινή αύρα.",
        room_living_title: "Σαλόνι", room_living_desc: "Φωτεινός, άνετος χώρος χαλάρωσης με Smart TV για την ψυχαγωγία σας.",
        room_kitchen_title: "Κουζίνα", room_kitchen_desc: "Πλήρως εξοπλισμένη κουζίνα με φούρνο, ψυγείο, τοστιέρα και καφετιέρα.",
        room_bathroom_title: "Μπάνιο", room_bathroom_desc: "Σύγχρονο μπάνιο εξοπλισμένο με πλυντήριο ρούχων και είδη πρώτης ανάγκης.",
        amenities_title: "Παροχές & Ανέσεις", am_ac: "Κλιματισμός (A/C)", am_tv: "Smart TV", am_wifi: "Δωρεάν Wi-Fi", am_washer: "Πλυντήριο Ρούχων", am_oven: "Φούρνος & Εστίες", am_fridge: "Ψυγείο", am_toaster: "Τοστιέρα", am_parking: "Δωρεάν Parking", am_fire: "Πυροσβεστήρας", am_firstaid: "Κουτί Πρώτων Βοηθειών", am_pillows: "Extra Μαξιλάρια",
        gallery_title: "Φωτογραφίες & Αξιοθέατα", gallery_subtitle: "Οι καλύτερες φωτογραφίες του καταλύματος, της παραλίας και της κοντινής Καβάλας",
        contact_title: "Επικοινωνία", form_name: "Ονοματεπώνυμο", form_email: "Email Διεύθυνση", form_msg: "Γράψτε το μήνυμά σειράς ή τις ημερομηνίες ενδιαφέροντος...", form_btn: "Αποστολή Μηνύματος"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) element.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-holder]').forEach(element => {
        const key = element.getAttribute('data-i18n-holder');
        if (translations[lang] && translations[lang][key]) element.setAttribute('placeholder', translations[lang][key]);
    });
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
}

// ==========================================================================
// 2. ΕΞΥΠΝΟΣ ΜΗΧΑΝΙΣΜΟΣ SLIDESHOWS (Fix για Μικτές Καταλήξεις)
// ==========================================================================
function initDynamicSlideshows() {
    // Background Slideshow (Hero)
    document.querySelectorAll('.auto-slideshow-bg').forEach(section => {
        const folder = section.getAttribute('data-folder');
        const total = parseInt(section.getAttribute('data-total')) || 1;
        let currentIndex = 1;

        function rotateBackground() {
            let imgNum = String(currentIndex).padStart(2, '0');
            // Επειδή το hero-01 είναι png αλλά τα 02,03,04,05 είναι jpg:
            let ext = (currentIndex === 1) ? 'png' : 'jpg';
            
            section.style.backgroundImage = `linear-gradient(rgba(2, 48, 71, 0.4), rgba(2, 48, 71, 0.2)), url('${folder}-${imgNum}.${ext}')`;
            currentIndex = (currentIndex % total) + 1;
        }
        
        rotateBackground();
        if (total > 1) setInterval(rotateBackground, 5000);
    });

    // Κανονικά Slideshows (Δωμάτια)
    document.querySelectorAll('.auto-slideshow-img').forEach(container => {
        const folder = container.getAttribute('data-folder');
        const total = parseInt(container.getAttribute('data-total')) || 1;
        const ext = container.getAttribute('data-ext') || 'png';

        const imgElement = document.createElement('img');
        imgElement.classList.add('lightbox-trigger');
        imgElement.alt = "Property Space";
        container.appendChild(imgElement);

        let currentIndex = 1;

        function rotateImage() {
            let imgNum = String(currentIndex).padStart(2, '0');
            imgElement.style.opacity = 0.2;
            
            setTimeout(() => {
                imgElement.src = `${folder}-${imgNum}.${ext}`;
                imgElement.style.opacity = 1;
            }, 250);
            
            currentIndex = (currentIndex % total) + 1;
        }

        rotateImage();
        if (total > 1) setInterval(rotateImage, 4000);
    });
}

// ==========================================================================
// 3. EVENT LISTENERS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }
    setLanguage(savedLang);
    initDynamicSlideshows();

    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Lightbox
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.lightbox-close');

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox-trigger') && modal && modalImg) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            setTimeout(() => modal.classList.add('show'), 10);
            document.body.style.overflow = 'hidden';
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeModal(); });

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = "none", 300);
        document.body.style.overflow = 'auto';
    }
});
