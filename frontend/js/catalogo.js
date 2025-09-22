const filtros = document.getElementById('filtros');
const cards   = Array.from(document.querySelectorAll('.grid .card'));

const priceRules = {
  'lt100':   (p) => p < 100000,
  '100-300': (p) => p >= 100000 && p <= 300000,
  'gt300':   (p) => p > 300000
};

const norm = (s) => (s ?? '').toString().trim().toLowerCase();
const getNumberFromText = (t) => Number((t ?? '').replace(/\D+/g, '') || 0);

function getCategoriasSeleccionadas() {
  return Array.from(filtros.querySelectorAll('input[name="cat"]:checked'))
    .map(i => norm(i.value));                     // p.ej. "silla", "juegos de mesa"
}

function getPriceFnsSeleccionadas() {
  return Array.from(filtros.querySelectorAll('input[name="price"]:checked'))
    .map(i => priceRules[i.value])
    .filter(Boolean);
}

function getPriceFromCard(card) {
  if (card.dataset.price) return Number(card.dataset.price);
  const txt = card.querySelector('.precio')?.textContent;
  return getNumberFromText(txt);
}

function getCategoriaFromCard(card) {
  return norm(card.dataset.categoria || card.dataset.category || '');
}

function aplicarFiltros() {
  const catsSel  = getCategoriasSeleccionadas();
  const priceFns = getPriceFnsSeleccionadas();

  cards.forEach(card => {
    const catCard   = getCategoriaFromCard(card);
    const priceCard = getPriceFromCard(card);

    const okCat   = catsSel.length === 0 || catsSel.includes(catCard);
    const okPrice = priceFns.length === 0 || priceFns.some(fn => fn(priceCard));
    const mostrar = okCat && okPrice;

    card.classList.toggle('is-hidden', !mostrar);
  });
}

if (filtros) filtros.addEventListener('change', aplicarFiltros);
document.addEventListener('DOMContentLoaded', aplicarFiltros);
