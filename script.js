// Datos de viviendas, trasteros y cocheras
const viviendas = [
    // Bloque A (9 viviendas)
    { bloque: 'A', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 54.35, precio: 274620 },
    { bloque: 'A', piso: 'Primero B', dormitorios: 1, baños: 1, supUtil: 36.78, precio: 187146 },
    { bloque: 'A', piso: 'Primero C', dormitorios: 1, baños: 1, supUtil: 36.91, precio: 189958 },
    { bloque: 'A', piso: 'Segundo A', dormitorios: 2, baños: 2, supUtil: 68.65, precio: 365227 },
    { bloque: 'A', piso: 'Segundo B', dormitorios: 2, baños: 2, supUtil: 76.16, precio: 394174 },
    { bloque: 'A', piso: 'Tercero A', dormitorios: 2, baños: 2, supUtil: 68.65, precio: 375098 },
    { bloque: 'A', piso: 'Tercero B', dormitorios: 2, baños: 2, supUtil: 76.01, precio: 404547 },
    { bloque: 'A', piso: 'Cuarto A', dormitorios: 2, baños: 2, supUtil: 68.61, precio: 394840 },
    { bloque: 'A', piso: 'Cuarto B', dormitorios: 2, baños: 2, supUtil: 75.97, precio: 425293 },
    // Bloque B (10 viviendas)
    { bloque: 'B', piso: 'Primero A', dormitorios: 1, baños: 1, supUtil: 36.85, precio: 186412.5 },
    { bloque: 'B', piso: 'Primero B', dormitorios: 1, baños: 1, supUtil: 36.39, precio: 184612.5 },
    { bloque: 'B', piso: 'Primero C', dormitorios: 1, baños: 1, supUtil: 36.92, precio: 189900 },
    { bloque: 'B', piso: 'Primero D', dormitorios: 1, baños: 1, supUtil: 37.03, precio: 189900 },
    { bloque: 'B', piso: 'Segundo A', dormitorios: 3, baños: 2, supUtil: 87.58, precio: 447792 },
    { bloque: 'B', piso: 'Segundo B', dormitorios: 2, baños: 2, supUtil: 76.54, precio: 393338 },
    { bloque: 'B', piso: 'Tercero A', dormitorios: 3, baños: 2, supUtil: 87.59, precio: 459576 },
    { bloque: 'B', piso: 'Tercero B', dormitorios: 2, baños: 2, supUtil: 76.45, precio: 403689 },
    { bloque: 'B', piso: 'Cuarto A', dormitorios: 3, baños: 2, supUtil: 87.6, precio: 483144 },
    { bloque: 'B', piso: 'Cuarto B', dormitorios: 2, baños: 2, supUtil: 76.34, precio: 424391 },
    // Bloque C (4 viviendas)
    { bloque: 'C', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 50.83, precio: 281248 },
    { bloque: 'C', piso: 'Segundo A', dormitorios: 2, baños: 2, supUtil: 60.49, precio: 343595 },
    { bloque: 'C', piso: 'Tercero A', dormitorios: 2, baños: 2, supUtil: 60.49, precio: 353412 },
    { bloque: 'C', piso: 'Cuarto A', dormitorios: 2, baños: 2, supUtil: 58.9, precio: 392680 },
    // Bloque D (8 viviendas)
    { bloque: 'D', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 63.87, precio: 318955 },
    { bloque: 'D', piso: 'Primero B', dormitorios: 1, baños: 1, supUtil: 38.55, precio: 202300 },
    { bloque: 'D', piso: 'Segundo A', dormitorios: 1, baños: 1, supUtil: 36.96, precio: 210060 },
    { bloque: 'D', piso: 'Segundo B', dormitorios: 1, baños: 1, supUtil: 34.46, precio: 189396 },
    { bloque: 'D', piso: 'Segundo C', dormitorios: 1, baños: 1, supUtil: 35.99, precio: 197820 },
    { bloque: 'D', piso: 'Tercero A', dormitorios: 1, baños: 1, supUtil: 36.96, precio: 215895 },
    { bloque: 'D', piso: 'Tercero B', dormitorios: 1, baños: 1, supUtil: 34.46, precio: 194657 },
    { bloque: 'D', piso: 'Tercero C', dormitorios: 1, baños: 1, supUtil: 35.99, precio: 203315 },
    // Bloque E (2 viviendas)
    { bloque: 'E', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 64.65, precio: 338208 },
    { bloque: 'E', piso: 'Segundo A', dormitorios: 2, baños: 2, supUtil: 72.18, precio: 428976 }
];

// Mostrar Viviendas
function displayViviendas(filteredViviendas) {
    const viviendasGrid = document.getElementById('viviendas-grid');
    viviendasGrid.innerHTML = '';
    filteredViviendas.forEach(v => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-image" style="background-image: url('foto2.jpg');"></div>
            <div class="property-details">
                <h3 class="property-title">${v.piso}, Bloque ${v.bloque}</h3>
                <div class="property-features">
                    <span>${v.dormitorios} Dorm</span>
                    <span>${v.baños} Baños</span>
                    <span>${v.supUtil} m²</span>
                </div>
                <p class="property-description">Vivienda moderna en el corazón de Granada, ideal para familias o inversores.</p>
                <div class="property-price">€${v.precio.toLocaleString()}</div>
                <a href="#contact" class="cta-button">Solicitar Información</a>
            </div>
        `;
        viviendasGrid.appendChild(card);
    });
}

// Filtrar Viviendas
function filterViviendas() {
    const dormitorios = document.getElementById('dormitorios').value;
    const precio = document.getElementById('precio').value;
    const bloque = document.getElementById('bloque').value;

    let filtered = [...viviendas];

    if (dormitorios) {
        filtered = filtered.filter(v => v.dormitorios == dormitorios);
    }
    if (precio) {
        const [min, max] = precio.split('-').map(Number);
        filtered = filtered.filter(v => v.precio >= min && v.precio <= max);
    }
    if (bloque) {
        filtered = filtered.filter(v => v.bloque === bloque);
    }

    displayViviendas(filtered);
}

// Función para inicializar el mapa
function initMap() {
    try {
        const location = { lat: 37.182258, lng: -3.603283 }; // Coordenadas precisas de Calle Ventanilla, Granada
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: location,
            styles: [
                {
                    "featureType": "poi",
                    "stylers": [{ "visibility": "simplified" }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{ "visibility": "off" }]
                }
            ]
        });
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Ventanilla, Granada'
        });

        // Añadir InfoWindow
        const infoWindow = new google.maps.InfoWindow({
            content: '<h3>Ventanilla Residencial</h3><p>Calle Ventanilla, Granada<br>33 viviendas modernas en el corazón de Granada</p>'
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    } catch (error) {
        console.error('Error al cargar el mapa:', error);
        document.getElementById('map').innerHTML = '<p>Error al cargar el mapa. Por favor, verifica tu conexión o intenta de nuevo más tarde.</p>';
    }
}

// Modal para Galería
document.addEventListener('DOMContentLoaded', function() {
    // Eventos para los filtros
    document.getElementById('dormitorios').addEventListener('change', filterViviendas);
    document.getElementById('precio').addEventListener('change', filterViviendas);
    document.getElementById('bloque').addEventListener('change', filterViviendas);

    // Carga inicial de viviendas
    displayViviendas(viviendas);

    // Configuración del modal de galería
    const modal = document.getElementById('gallery-modal');
    const closeModal = document.querySelector('.close-modal');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.style.backgroundImage.slice(4, -1).replace(/"/g, "");
            document.querySelector('.modal-body').innerHTML = `<img src="${imgSrc}" alt="Gallery image">`;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Form Submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });

    // Active Navigation Link
    const navLinks = document.querySelectorAll('nav a');
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});