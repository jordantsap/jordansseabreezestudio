/**
 * Jordan's Sea Breeze Studio - Core Javascript Engine
 * Includes: Multi-language (i18n), Dynamic Slideshows, and Interactive Live Lightbox with Manual Controls
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
        contact_title: "Contact Us", form_name: "Full Name", form_email: "Email Address", form_msg: "Your message or preferred dates...", form_btn: "Send Message",
        "location_title": "Location",
        "location_subtitle": "Nea Karvali, Kavala - Discover our area",
        "location_address": "Nea Karvali, P.C. 64006, Kavala, Greece",
        "location_beach_title": "Nea Karvali Beach",
        "location_beach_desc": "Just a few steps from the studio, ideal for families, with organized beach bars and crystal-clear waters.",
        "location_distances_title": "Nearby Distances",
        "loc_dist_1": "Kavala City:",
        "loc_time_1": "10-12 minutes by car",
        "loc_dist_2": "Airport (KVA):",
        "loc_time_2": "10 minutes",
        "loc_dist_3": "Philippi Archaeological Site:",
        "loc_time_3": "25 minutes"
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
        contact_title: "Επικοινωνία", form_name: "Ονοματεπώνυμο", form_email: "Email Διεύθυνση", form_msg: "Γράψτε το μήνυμά σας ή τις ημερομηνίες ενδιαφέροντος...", form_btn: "Αποστολή Μηνύματος",
        "location_title": "Τοποθεσία",
        "location_subtitle": "Νέα Καρβάλη, Καβάλα - Ανακαλύψτε την περιοχή μας",
        "location_address": "Νέα Καρβάλη, Τ.Κ. 64006, Καβάλα, Ελλάδα",
        "location_beach_title": "Παραλία Νέας Καρβάλης",
        "location_beach_desc": "Μόλις λίγα βήματα από το studio, ιδανική για οικογένειες, με οργανωμένα beach bars και πεντακάθαρα νερά.",
        "location_distances_title": "Κοντινές Αποστάσεις",
        "loc_dist_1": "Πόλη Καβάλας:",
        "loc_time_1": "10-12 λεπτά με το αυτοκίνητο",
        "loc_dist_2": "Αεροδρόμιο (KVA):",
        "loc_time_2": "10 λεπτά",
        "loc_dist_3": "Αρχαιολογικός Χώρος Φιλίππων:",
        "loc_time_3": "25 λεπτά"
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

// Global Variables για τον έλεγχο του Lightbox
let currentLightboxData = {
    folder: "",
    total: 1,
    currentIndex: 1,
    isSlideshow: false
};
let activeLightboxContainer = null;

// ==========================================================================
// 2. ΜΗΧΑΝΙΣΜΟΣ ΑΥΤΟΜΑΤΩΝ SLIDESHOWS (.png)
// ==========================================================================
function initDynamicSlideshows() {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');

    // Hero Section Background
    document.querySelectorAll('.auto-slideshow-bg').forEach(section => {
        const folder = section.getAttribute('data-folder');
        const total = parseInt(section.getAttribute('data-total')) || 1;
        let index = 1;

        function rotateBackground() {
            let imgNum = String(index).padStart(2, '0');
            section.style.backgroundImage = `linear-gradient(rgba(2, 48, 71, 0.4), rgba(2, 48, 71, 0.2)), url('${folder}-${imgNum}.png')`;
            index = (index % total) + 1;
        }
        
        rotateBackground();
        if (total > 1) setInterval(rotateBackground, 5000);
    });

    // Δωματια / Spaces Inline Slideshows
    document.querySelectorAll('.auto-slideshow-img').forEach(container => {
        const folder = container.getAttribute('data-folder');
        const total = parseInt(container.getAttribute('data-total')) || 1;

        const imgElement = document.createElement('img');
        imgElement.classList.add('lightbox-trigger');
        imgElement.alt = "Property Space";
        container.appendChild(imgElement);

        let localIndex = 1;

        // Αποθήκευση δεδομένων πάνω στο ίδιο το στοιχείο για το Lightbox
        container.dataset.currentIndex = localIndex;

        function rotateImage() {
            // Αν ο χρήστης έχει ανοίξει ΑΥΤΟ το δωμάτιο στο Lightbox, συγχρονίζουμε το index
            if (modal && modal.classList.contains('show') && activeLightboxContainer === container) {
                localIndex = currentLightboxData.currentIndex;
            }

            let imgNum = String(localIndex).padStart(2, '0');
            const targetSrc = `${folder}-${imgNum}.png`;

            imgElement.style.opacity = 0.2;
            setTimeout(() => {
                imgElement.src = targetSrc;
                imgElement.style.opacity = 1;
                container.dataset.currentIndex = localIndex;

                // Live ενημέρωση του Lightbox αν δεν έχει παγώσει από χειροκίνητο κλικ
                if (modal && modal.classList.contains('show') && activeLightboxContainer === container && currentLightboxData.isSlideshow) {
                    modalImg.src = targetSrc;
                }
            }, 250);

            localIndex = (localIndex % total) + 1;
            if (modal && modal.classList.contains('show') && activeLightboxContainer === container && currentLightboxData.isSlideshow) {
                currentLightboxData.currentIndex = localIndex;
            }
        }

        rotateImage();
        if (total > 1) setInterval(rotateImage, 4000);
    });
}

// ==========================================================================
// 3. ΑΝΑΒΑΘΜΙΣΜΕΝΟ LIGHTBOX ENGINE (Live Slideshow + Χειροκίνητα Βέλη)
// ==========================================================================
function initLightboxEngine() {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    
    if (!modal || !modalImg) return;

    // Δημιουργία βελών αν δεν υπάρχουν ήδη στην HTML
    if (!document.getElementById('lightboxPrev')) {
        const prevBtn = document.createElement('span');
        prevBtn.id = 'lightboxPrev';
        prevBtn.className = 'lightbox-nav prev';
        prevBtn.innerHTML = '&#10094;';
        modal.appendChild(prevBtn);

        const nextBtn = document.createElement('span');
        nextBtn.id = 'lightboxNext';
        nextBtn.className = 'lightbox-nav next';
        nextBtn.innerHTML = '&#10095;';
        modal.appendChild(nextBtn);
        
        // Event Listeners στα βέλη της οθόνης
        prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
        nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });
    }

    // Άνοιγμα Lightbox με κλικ σε εικόνα
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('lightbox-trigger')) {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            setTimeout(() => modal.classList.add('show'), 10);
            document.body.style.overflow = 'hidden';

            const parentContainer = e.target.closest('.auto-slideshow-img');
            if (parentContainer) {
                // Ρύθμιση δεδομένων για το slideshow δωματίου
                activeLightboxContainer = parentContainer;
                currentLightboxData.folder = parentContainer.getAttribute('data-folder');
                currentLightboxData.total = parseInt(parentContainer.getAttribute('data-total')) || 1;
                currentLightboxData.currentIndex = parseInt(parentContainer.dataset.currentIndex) || 1;
                currentLightboxData.isSlideshow = true; // Ξεκινάει αυτόματα
            } else {
                // Στατική εικόνα (π.χ. About section)
                activeLightboxContainer = null;
                currentLightboxData.isSlideshow = false;
            }
        }
    });

    // Συνάρτηση χειροκίνητης πλοήγησης (Βέλη / Πληκτρολόγιο)
    function navigateLightbox(direction) {
        if (!currentLightboxData.folder || currentLightboxData.total <= 1) return;

        // Μόλις ο χρήστης πατήσει βέλος, σταματάμε την αυτόματη αλλαγή (πάγωμα)
        currentLightboxData.isSlideshow = false; 

        // Υπολογισμός νέου index
        let newIndex = currentLightboxData.currentIndex + direction;
        if (newIndex > currentLightboxData.total) newIndex = 1;
        if (newIndex < 1) newIndex = currentLightboxData.total;

        currentLightboxData.currentIndex = newIndex;
        
        // Αλλαγή εικόνας full screen
        let imgNum = String(newIndex).padStart(2, '0');
        modalImg.src = `${currentLightboxData.folder}-${imgNum}.png`;
    }

    // Κλείσιμο Lightbox
    const closeBtn = document.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal || e.target.classList.contains('lightbox-close')) closeModal(); });
    
    // Πλήκτρα Keyboard (Esc, Left Arrow, Right Arrow)
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show')) {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowLeft") navigateLightbox(-1);
            if (e.key === "ArrowRight") navigateLightbox(1);
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
            activeLightboxContainer = null;
            currentLightboxData.folder = "";
        }, 300);
        document.body.style.overflow = 'auto';
    }
}
// ==========================================================================
// 4. ΕΚΚΙΝΗΣΗ DOM & ΦΟΡΜΑΣ ΕΠΙΚΟΙΝΩΝΙΑΣ
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- ΚΩΔΙΚΑΣ ΓΙΑ ΠΙΟ ΑΡΓΟ & ΟΜΑΛΟ SCROLL (CUSTOM SMOOTH SCROLL) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Κλείσιμο του κινητού μενού (αν είναι ανοιχτό)
                const navMenu = document.getElementById('navMenu');
                const hamburgerIcon = document.getElementById('hamburger')?.querySelector('i');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (hamburgerIcon) {
                        hamburgerIcon.classList.add('fa-bars');
                        hamburgerIcon.classList.remove('fa-times');
                    }
                }

                // Υπολογισμός θέσης (με offset 80px για να μην κρύβεται ο τίτλος από το μενού)
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                
                // ΔΙΑΡΚΕΙΑ (σε χιλιοστά του δευτερολέπτου)
                // 1200ms = 1.2 δευτερόλεπτα. Αν το θέλεις ΠΙΟ ΑΡΓΟ, μεγάλωσε αυτό το νούμερο (π.χ., 1600)
                const duration = 1200; 
                let start = null;

                // Ήπια μαθηματική κίνηση (Ease-In-Out) για να ξεκινάει απαλά και να σταματάει απαλά
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }

                function easeInOutQuad(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }

                requestAnimationFrame(animation);
            }
        });
    });
    // Setup Γλώσσας
    const langSelect = document.getElementById('langSelect');
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }
    setLanguage(savedLang);

    // Εκκίνηση Λειτουργιών Slideshow & Lightbox
    initDynamicSlideshows();
    initLightboxEngine();

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    }

    // --- ΚΩΔΙΚΑΣ ΓΙΑ ΤΗ ΦΟΡΜΑ Web3Forms (Αποφυγή 405 και ανανέωσης) ---
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (form && submitBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Σταματάει το default submit του browser (Αντίο 405!)
            
            // Αλλαγή κατάστασης κουμπιού
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Αποστολή...";
            submitBtn.disabled = true;

            // Συλλογή δεδομένων
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            // Αποστολή στο API του Web3Forms
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json' 
                },
                body: json
            })
            .then(async (response) => {
                let res = await response.json();
                if (response.status == 200) {
                    // Επιτυχία
                    submitBtn.innerText = "Το μήνυμα στάλθηκε επιτυχώς!";
                    submitBtn.style.backgroundColor = "#2a9d8f"; // Πράσινο background
                    submitBtn.style.color = "#fff";
                    form.reset(); // Καθαρισμός πεδίων
                } else {
                    // Σφάλμα από το API
                    submitBtn.innerText = "Σφάλμα: " + res.message;
                    submitBtn.disabled = false;
                }
            })
            .catch(error => {
                // Σφάλμα δικτύου
                submitBtn.innerText = "Αποτυχία σύνδεσης";
                submitBtn.disabled = false;
            });
        });
    }
});

// --- ΚΩΔΙΚΑΣ ΓΙΑ ΚΟΥΜΠΙ BACK TO TOP (ΜΕ CUSTOM SMOOTH SCROLL) ---
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Υπολογισμός του μισού ύψους της σελίδας
            const halfPageHeight = document.documentElement.scrollHeight / 2;
            
            if (window.scrollY > halfPageHeight) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Λειτουργία όταν γίνει κλικ (Χρήση του ίδιου αργού animation)
        backToTopBtn.addEventListener('click', () => {
            const startPosition = window.scrollY;
            const distance = -startPosition; // Θέλουμε να πάμε στο 0, οπότε η απόσταση είναι αρνητική
            const duration = 1200; // 1.2 δευτερόλεπτα (ίδια ταχύτητα με το μενού)
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Η μαθηματική συνάρτηση κίνησης για απαλό ξεκίνημα και σταμάτημα
            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        });
    }
