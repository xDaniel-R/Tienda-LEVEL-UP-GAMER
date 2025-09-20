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


//Acá el código guarda los datos en constantes
const rutText = document.getElementById("rut");
const usernameText = document.getElementById("username");
const lastnameText = document.getElementById("userlastname");
const emailText = document.getElementById("email");
const passwordText = document.getElementById("password");
const phoneText = document.getElementById("phone");
const addressText = document.getElementById("address");
const regionSelect = document.getElementById("region");
const comunaSelect = document.getElementById("comuna");


//Se llama al botón de registrar
const botonRegistrar = document.getElementById("boton-registrar");


//Acá se crea el evento para que al hacer click en el botón, se guarden los datos en el local storage
botonRegistrar.addEventListener("click", (e) => {
    //Previene que se recargue la página
    e.preventDefault();
    //Se guardan los valores de los inputs en variables
    const rut = rutText.value;
    const nombre = usernameText.value;
    const apellido = lastnameText.value;
    const correo = emailText.value;
    const contrasena = passwordText.value;
    const telefono = phoneText.value;
    const direccion = addressText.value;
    const region = regionSelect.value;
    const comuna = comunaSelect.value;

    //Lógica para guardar los datos de usuario en el local storage
    if (rut === "" || username === "" || email === "" || Contraseña === "" || telefono === "" || region === "" || comuna === "" || direccion === "") {
        return alert("Por favor, complete todos los campos del formulario."); // Evita que el formulario se envíe
    } else {
        //Almacenamos los datos en el local storage
        localStorage.setItem("rut", rut);
        localStorage.setItem("username", nombre);
        localStorage.setItem("userlastname", apellido);
        localStorage.setItem("email", correo);
        localStorage.setItem("password", contrasena);
        localStorage.setItem("phone", telefono);
        localStorage.setItem("address", direccion);
        localStorage.setItem("region", region);
        localStorage.setItem("comuna", comuna);
        //Console log es para ver los datos guardados en el navegador
        console.log(localStorage)
        alert("Registro exitoso!. Ahora serás redirigido a la página de inicio de sesión.");
        window.location.href = "login.html";
    }

})
