document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btin");
    const contador = document.querySelector("#cart-count");
    const btnIrCarritoPage = document.querySelector("#btn-ir-carrito-page");

    // Función para obtener carrito
    function getCarrito() {
        return JSON.parse(localStorage.getItem("carrito")) || [];
    }

    // Actualizar contador y renderizar productos
    function actualizarContador() {
        const carrito = getCarrito();
        const totalItems = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
        if (contador) contador.textContent = totalItems;
    }

    // Agregar producto al carrito
    botonesAgregar.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".card");
            const titulo = card.querySelector(".titulo").textContent.trim();
            const precioTexto = card.querySelector(".precio").textContent;
            const precio = Number(precioTexto.replace(/\D+/g, ''));
            const img = card.querySelector("img")?.src || '';

            let carrito = getCarrito();
            const index = carrito.findIndex(p => p.titulo === titulo);

            if (index !== -1) {
                carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
            } else {
                carrito.push({ titulo, precio, img, cantidad: 1 });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarContador();
        });
    });

    // Redirigir al carrito.html
    if (btnIrCarritoPage) {
        btnIrCarritoPage.addEventListener("click", () => {
            window.location.href = "../html/carrito.html";
        });
    }

    // Inicializar contador al cargar
    actualizarContador();
});