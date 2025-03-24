const fs = require('fs');
const path = require('path');

// Datos de las viviendas (copiados del index.html)
const viviendas = [
    // Bloque A (9 viviendas)
    { bloque: 'A', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 54.35, precio: 274620, estado: 'Disponible' },
    { bloque: 'A', piso: 'Primero B', dormitorios: 1, baños: 1, supUtil: 36.78, precio: 187146, estado: 'Disponible' },
    { bloque: 'A', piso: 'Primero C', dormitorios: 1, baños: 1, supUtil: 36.91, precio: 189958, estado: 'Disponible' },
    { bloque: 'A', piso: 'Segundo A', dormitorios: 2, baños: 2, supUtil: 68.65, precio: 365227, estado: 'Disponible' },
    { bloque: 'A', piso: 'Segundo B', dormitorios: 2, baños: 2, supUtil: 76.16, precio: 394174, estado: 'Disponible' },
    { bloque: 'A', piso: 'Tercero A', dormitorios: 2, baños: 2, supUtil: 68.65, precio: 375098, estado: 'Disponible' },
    { bloque: 'A', piso: 'Tercero B', dormitorios: 2, baños: 2, supUtil: 76.01, precio: 404547, estado: 'Disponible' },
    { bloque: 'A', piso: 'Cuarto A', dormitorios: 2, baños: 2, supUtil: 68.61, precio: 394840, estado: 'Disponible' },
    { bloque: 'A', piso: 'Cuarto B', dormitorios: 2, baños: 2, supUtil: 75.97, precio: 425293, estado: 'Disponible' },
    // Bloque B (10 viviendas)
    { bloque: 'B', piso: 'Primero A', dormitorios: 1, baños: 1, supUtil: 36.85, precio: 186412.5, estado: 'Disponible' },
    { bloque: 'B', piso: 'Primero B', dormitorios: 1, baños: 1, supUtil: 36.39, precio: 184612.5, estado: 'Disponible' },
    { bloque: 'B', piso: 'Primero C', dormitorios: 1, baños: 1, supUtil: 36.92, precio: 189900, estado: 'Disponible' },
    { bloque: 'B', piso: 'Primero D', dormitorios: 1, baños: 1, supUtil: 37.03, precio: 189900, estado: 'Disponible' },
    { bloque: 'B', piso: 'Segundo A', dormitorios: 3, baños: 2, supUtil: 87.58, precio: 447792, estado: 'Disponible' },
    { bloque: 'B', piso: 'Segundo B', dormitorios: 2, baños: 2, supUtil: 76.54, precio: 393338, estado: 'Disponible' },
    { bloque: 'B', piso: 'Tercero A', dormitorios: 3, baños: 2, supUtil: 87.59, precio: 459576, estado: 'Disponible' },
    { bloque: 'B', piso: 'Tercero B', dormitorios: 2, baños: 2, supUtil: 76.45, precio: 403689, estado: 'Disponible' },
    { bloque: 'B', piso: 'Cuarto A', dormitorios: 3, baños: 2, supUtil: 87.6, precio: 483144, estado: 'Disponible' },
    { bloque: 'B', piso: 'Cuarto B', dormitorios: 2, baños: 2, supUtil: 76.34, precio: 424391, estado: 'Disponible' },
    // Bloque C (4 viviendas)
    { bloque: 'C', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 50.83, precio: 281248, estado: 'Disponible' },
    { bloque: 'C', piso: 'Segundo A', dormitorios: 2, baños: 2, supUtil: 60.49, precio: 343595, estado: 'Disponible' },
    { bloque: 'C', piso: 'Tercero A', dormitorios: 2, baños: 2, supUtil: 60.49, precio: 353412, estado: 'Disponible' },
    { bloque: 'C', piso: 'Cuarto A', dormitorios: 2, baños: 2, supUtil: 58.9, precio: 392680, estado: 'Disponible' },
    // Bloque D (8 viviendas)
    { bloque: 'D', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 63.87, precio: 318955, estado: 'Disponible' },
    { bloque: 'D', piso: 'Primero B', dormitorios: 1, baños: 1, supUtil: 38.55, precio: 202300, estado: 'Disponible' },
    { bloque: 'D', piso: 'Segundo A', dormitorios: 1, baños: 1, supUtil: 36.96, precio: 210060, estado: 'Disponible' },
    { bloque: 'D', piso: 'Segundo B', dormitorios: 1, baños: 1, supUtil: 34.46, precio: 189396, estado: 'Disponible' },
    { bloque: 'D', piso: 'Segundo C', dormitorios: 1, baños: 1, supUtil: 35.99, precio: 197820, estado: 'Disponible' },
    { bloque: 'D', piso: 'Tercero A', dormitorios: 1, baños: 1, supUtil: 36.96, precio: 215895, estado: 'Disponible' },
    { bloque: 'D', piso: 'Tercero B', dormitorios: 1, baños: 1, supUtil: 34.46, precio: 194657, estado: 'Disponible' },
    { bloque: 'D', piso: 'Tercero C', dormitorios: 1, baños: 1, supUtil: 35.99, precio: 203315, estado: 'Disponible' },
    // Bloque E (2 viviendas)
    { bloque: 'E', piso: 'Primero A', dormitorios: 2, baños: 2, supUtil: 64.65, precio: 338208, estado: 'Disponible' },
    { bloque: 'E', piso: 'Segundo A', dormitorios: 2, baños: 2, supUtil: 72.18, precio: 428976, estado: 'Disponible' }
];

// Crear el directorio viviendas si no existe
const viviendasDir = path.join(__dirname, 'viviendas');
if (!fs.existsSync(viviendasDir)) {
    fs.mkdirSync(viviendasDir);
}

// Leer la plantilla
const template = fs.readFileSync(path.join(__dirname, 'viviendas', 'template.html'), 'utf8');

// Generar páginas para cada vivienda
viviendas.forEach(vivienda => {
    // Crear el ID de la vivienda
    const viviendaId = `${vivienda.bloque}-${vivienda.piso.replace(' ', '-')}`.toLowerCase();
    
    // Reemplazar los marcadores de posición en la plantilla
    let content = template
        .replace(/\[BLOQUE-PISO\]/g, `${vivienda.bloque} ${vivienda.piso}`)
        .replace(/\[DORMITORIOS\]/g, vivienda.dormitorios)
        .replace(/\[BAÑOS\]/g, vivienda.baños)
        .replace(/\[SUP_UTIL\]/g, vivienda.supUtil.toFixed(2))
        .replace(/\[PRECIO\]/g, vivienda.precio.toLocaleString())
        .replace(/\[ESTADO\]/g, vivienda.estado)
        .replace(/\[ESTADO-CLASS\]/g, vivienda.estado === 'Reservado' ? 'estado-reservado' : 'estado-disponible')
        .replace(/\[ID\]/g, viviendaId);

    // Guardar el archivo
    const fileName = path.join(viviendasDir, `${viviendaId}.html`);
    fs.writeFileSync(fileName, content);
    console.log(`Página generada: ${fileName}`);
});

console.log('Generación de páginas completada.'); 