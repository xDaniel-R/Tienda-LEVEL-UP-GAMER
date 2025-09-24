// carrito-page.js
document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorProductos = document.querySelector('.carrito-items');
    const totalSpan = document.querySelector('.fw-bold');
    const cartCount = document.getElementById('cart-count');

    function renderizarCarrito() {
        contenedorProductos.innerHTML = '';
        carrito.forEach((p, i) => {
            const div = document.createElement('div');
            div.classList.add('carrito-item', 'mb-3', 'd-flex', 'align-items-center', 'gap-3');

            div.innerHTML = `
                <img src="${p.img}" class="carrito-img" alt="${p.titulo}" style="width:100px;">
                <div class="flex-grow-1">
                    <h5>${p.titulo}</h5>
                    <span class="fw-bold">$${p.precio.toLocaleString()}</span>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-secondary btn-sm btn-restar">-</button>
                    <input type="text" class="form-control text-center mx-2 cantidad" value="${p.cantidad}" style="width:50px;">
                    <button class="btn btn-outline-secondary btn-sm btn-sumar">+</button>
                </div>
            `;

            contenedorProductos.appendChild(div);

            // Botones + / -
            div.querySelector('.btn-sumar').addEventListener('click', () => {
                carrito[i].cantidad += 1;
                actualizarCarrito();
            });

            div.querySelector('.btn-restar').addEventListener('click', () => {
                if (carrito[i].cantidad > 1) {
                    carrito[i].cantidad -= 1;
                    actualizarCarrito();
                } else {
                    carrito.splice(i, 1);
                    actualizarCarrito();
                }
            });

            div.querySelector('.cantidad').addEventListener('change', (e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val > 0) {
                    carrito[i].cantidad = val;
                } else {
                    carrito[i].cantidad = 1;
                }
                actualizarCarrito();
            });
        });

        actualizarTotal();
    }

    function actualizarTotal() {
        const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
        totalSpan.textContent = `$${total.toLocaleString()}`;
        cartCount.textContent = carrito.reduce((acc, p) => acc + p.cantidad, 0);
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function actualizarCarrito() {
        renderizarCarrito();
    }

    renderizarCarrito();
});
