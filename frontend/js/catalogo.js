// Obtener el contenedor de filtros (inputs de categoría y precio)
const filtros = document.getElementById('filtros');

// Obtener todas las tarjetas de productos dentro del grid
const cards   = Array.from(document.querySelectorAll('.grid .card'));

// Reglas para filtrar precios según el rango seleccionado
const priceRules = {
  'lt100':   (p) => p < 100000,                        // Menos de 100.000
  '100-300': (p) => p >= 100000 && p <= 300000,        // Entre 100.000 y 300.000
  'gt300':   (p) => p > 300000                         // Más de 300.000
};

// Normalizar texto (quitar espacios, pasar a minúsculas)
const norm = (s) => (s ?? '').toString().trim().toLowerCase();

// Extraer número de un texto (ej: "$120.000" → 120000)
const getNumberFromText = (t) => Number((t ?? '').replace(/\D+/g, '') || 0);

// Obtener las categorías seleccionadas en los checkboxes
function getCategoriasSeleccionadas() {
  return Array.from(filtros.querySelectorAll('input[name="cat"]:checked'))
    .map(i => norm(i.value)); // Devuelve un array con los valores (ej: ["silla", "juegos de mesa"])
}

// Obtener las funciones de filtrado de precios seleccionadas
function getPriceFnsSeleccionadas() {
  return Array.from(filtros.querySelectorAll('input[name="price"]:checked'))
    .map(i => priceRules[i.value]) // Devuelve las funciones que corresponden a los rangos de precio elegidos
    .filter(Boolean);              // Elimina posibles valores vacíos
}

// Obtener el precio de una tarjeta (desde data-atributo o desde el texto del precio)
function getPriceFromCard(card) {
  if (card.dataset.price) return Number(card.dataset.price); // Si tiene atributo data-price
  const txt = card.querySelector('.precio')?.textContent;    // Si no, busca el texto en el DOM
  return getNumberFromText(txt);                             // Convierte ese texto en número
}

// Obtener la categoría de una tarjeta (desde atributos personalizados)
function getCategoriaFromCard(card) {
  return norm(card.dataset.categoria || card.dataset.category || '');
}

// Aplicar los filtros seleccionados al catálogo
function aplicarFiltros() {
  const catsSel  = getCategoriasSeleccionadas();    // Categorías seleccionadas
  const priceFns = getPriceFnsSeleccionadas();      // Funciones de filtrado de precios

  // Recorrer todas las tarjetas de productos
  cards.forEach(card => {
    const catCard   = getCategoriaFromCard(card);   // Categoría de la tarjeta
    const priceCard = getPriceFromCard(card);       // Precio de la tarjeta

    // Verificar si la tarjeta pasa los filtros
    const okCat   = catsSel.length === 0 || catsSel.includes(catCard); // Si no hay filtros de categoría o si coincide
    const okPrice = priceFns.length === 0 || priceFns.some(fn => fn(priceCard)); // Igual con los precios
    const mostrar = okCat && okPrice; // La tarjeta se muestra solo si pasa ambas condiciones

    // Mostrar u ocultar la tarjeta según corresponda
    card.classList.toggle('is-hidden', !mostrar);
  });
}

// Cuando el usuario cambia algún filtro, se aplican los filtros de inmediato
if (filtros) filtros.addEventListener('change', aplicarFiltros);

// Cuando la página carga, aplicar filtros por defecto
document.addEventListener('DOMContentLoaded', aplicarFiltros);
