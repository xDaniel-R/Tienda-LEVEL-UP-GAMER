//Lógica para el dropdown de regiones y comunas

document.addEventListener("DOMContentLoaded", () => {
    const regionSelect = document.getElementById("region");
    const comunaSelect = document.getElementById("comuna");

    const comunasPorRegion = {
        aisen: ["Aisén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O’Higgins", "Rio Ibañez", "Tortel"],
        antofagasta: ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
        araucania: ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén",
            "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"],
        arica: ["Arica", "Camarones", "Putre", "General Lagos"],
        atacama: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
        biobio: ["Concepción", "Talcahuano", "Hualpén", "San Pedro de la Paz", "Chiguayante", "Coronel", "Lota", "Tomé", "Penco", "Florida", "Santa Juana", "Los Ángeles", "Nacimiento", "Laja", "Mulchén", "Negrete", "Yumbel", "Cabrero", "Quilaco", "Quilleco"],
        coquimbo: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
        ohiggins: ["Rancagua", "Machalí", "Graneros", "Mostazal", "Doñihue", "San Vicente", "San Fernando", "Chimbarongo", "Santa Cruz", "Peralillo", "Marchigüe", "Pichilemu", "Navidad", "Litueche", "La Estrella"],
        loslagos: ["Puerto Montt", "Puerto Varas", "Frutillar", "Llanquihue", "Los Muermos", "Maullín", "Calbuco", "Castro", "Ancud", "Quellón", "Quinchao", "Chaitén", "Futaleufú", "Palena", "Hualaihué"],
        losrios: ["Valdivia", "Lanco", "Máfil", "Mariquina", "Paillaco", "Los Lagos", "Corral", "Panguipulli", "La Unión", "Río Bueno", "Futrono", "Lago Ranco"],
        magallanes: ["Punta Arenas", "Puerto Natales", "Porvenir", "Primavera", "Timaukel", "Cabo de Hornos", "Antártica"],
        maule: ["Talca", "Constitución", "San Clemente", "Maule", "Curepto", "Pelarco", "Linares", "Yerbas Buenas", "Colbún", "San Javier", "Villa Alegre", "Longaví", "Retiro", "Parral", "Cauquenes", "Chanco", "Pelluhue"],
        nuble: ["Chillán", "Chillán Viejo", "Bulnes", "Quillón", "San Ignacio", "El Carmen", "Yungay", "Pemuco", "Coihueco", "San Carlos", "Ñiquén", "San Fabián", "San Nicolás", "Pinto", "Ránquil", "Quirihue", "Cobquecura", "Trehuaco"],
        metropolitana: ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo",
            "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine",
            "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro",
            "San Ramón", "Santiago Centro", "Talagante", "Tiltil", "Vitacura"],
        tarapaca: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Pica", "Huara", "Camiña", "Colchane"],
        valparaiso: ["Valparaíso", "Viña del Mar", "Concón", "Quintero", "Puchuncaví", "Casablanca", "Quilpué", "Villa Alemana", "Limache", "Olmué", "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo", "Isla de Pascua"]
    };

    regionSelect.addEventListener("change", function () {
        const region = this.value;
        comunaSelect.innerHTML = "<option value=''>Seleccione una comuna</option>";

        if (region && comunasPorRegion[region]) {
            comunasPorRegion[region].forEach((comuna) => {
                const option = document.createElement("option");
                option.value = comuna.toLowerCase().replace(/\s+/g, "-");
                option.textContent = comuna;
                comunaSelect.appendChild(option);
            });
        }
    });
});

// ==========================
// Captura de elementos
// ==========================
const rutText = document.getElementById("rut");
const usernameText = document.getElementById("username");
const lastnameText = document.getElementById("userlastname");
const emailText = document.getElementById("email");
const passwordText = document.getElementById("password");
const phoneText = document.getElementById("phone");
const addressText = document.getElementById("address");
const regionSelect = document.getElementById("region");
const comunaSelect = document.getElementById("comuna");
const botonRegistrar = document.getElementById("boton-registrar");

// ==========================
// Autoformateo de RUT
// ==========================
rutText.addEventListener("input", function (e) {
    let valor = e.target.value;

    // Eliminar puntos y guiones para limpiar
    valor = valor.replace(/[^\dkK]/g, ""); 
    valor = valor.replace(/^0+/, ""); 

    if (valor.length > 1) {
        let cuerpo = valor.slice(0, -1);
        let dv = valor.slice(-1);
        cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        e.target.value = `${cuerpo}-${dv}`;
    } else {
        e.target.value = valor;
    }
});

// ==========================
// Función para validar RUT chileno
// ==========================
function validarRut(rutCompleto) {
    rutCompleto = rutCompleto.replace(/\./g, "").replace(/-/g, "");
    if (rutCompleto.length < 8) return false;

    let cuerpo = rutCompleto.slice(0, -1);
    let dv = rutCompleto.slice(-1).toUpperCase();

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += multiplo * cuerpo.charAt(i);
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    let dvEsperado = 11 - (suma % 11);
    dvEsperado = dvEsperado === 11 ? "0" : dvEsperado === 10 ? "K" : dvEsperado.toString();

    return dv === dvEsperado;
}

// ==========================
// Evento de registro
// ==========================
botonRegistrar.addEventListener("click", (e) => {
    e.preventDefault();

    const rut = rutText.value.trim();
    const nombre = usernameText.value.trim();
    const apellido = lastnameText.value.trim();
    const correo = emailText.value.trim();
    const contrasena = passwordText.value.trim();
    const telefono = phoneText.value.trim();
    const direccion = addressText.value.trim();
    const region = regionSelect.value;
    const comuna = comunaSelect.value;

    // Validación de campos vacíos
    if (!rut || !nombre || !apellido || !correo || !contrasena || !direccion || !region || !comuna) {
        return alert("Por favor, complete todos los campos del formulario.");
    }

    // Validación de RUT
    if (!validarRut(rut)) {
        return alert("El RUT ingresado no es válido.");
    }

    // Validación de correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
        return alert("Por favor, ingrese un correo electrónico válido.");
    }

    // Validación de teléfono (solo números y al menos 8 dígitos)
    // const phonePattern = /^[0-9]{8,12}$/;
    // if (phonePattern.test(telefono)) {
    //     return alert("El número de teléfono debe tener entre 8 y 12 dígitos numéricos.");
    // }
    // Se comenta momentaneamente la validación de teléfono ya que generaba un bug al no ser un campo obligatorio

    // Validación de contraseña (mínimo 8 caracteres, al menos 1 mayúscula y 1 número)
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(contrasena)) {
        return alert("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
    }

    // Validación región/comuna seleccionadas
    if (region === "" || comuna === "") {
        return alert("Debe seleccionar una región y una comuna.");
    }

    // Guardar en LocalStorage
    localStorage.setItem("rut", rut);
    localStorage.setItem("username", nombre);
    localStorage.setItem("userlastname", apellido);
    localStorage.setItem("email", correo);
    localStorage.setItem("password", contrasena);
    localStorage.setItem("phone", telefono);
    localStorage.setItem("address", direccion);
    localStorage.setItem("region", region);
    localStorage.setItem("comuna", comuna);

    console.log(localStorage);
    alert("Registro exitoso! Ahora serás redirigido al inicio de sesión.");
    window.location.href = "login.html";
});