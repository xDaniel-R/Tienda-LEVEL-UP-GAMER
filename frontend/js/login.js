// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("floatingInput");
  const passwordInput = document.getElementById("floatingPassword");
  const rememberCheck = document.getElementById("checkDefault");

  // Cargar email guardado si existe
  if (localStorage.getItem("rememberedEmail")) {
    emailInput.value = localStorage.getItem("rememberedEmail");
    rememberCheck.checked = true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe de inmediato

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    //  Validaciones básicas
    if (!email) {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }

    // Expresión regular simple para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    if (!password) {
      alert("Por favor, ingresa tu contraseña.");
      return;
    }

    //  Guardar en localStorage si está marcado "Recuérdame"
    if (rememberCheck.checked) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    //  Simulación de login exitoso
    if (email === email && password === password) {
      alert("Inicio de sesión exitoso");
      alert("Serás redirigido a la página principal.");
      window.location.href = "cliente.html"; // Redirigir a la página principal
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  });
});
