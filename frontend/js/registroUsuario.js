//Lógica para el dropdown de regiones y comunas

document.addEventListener("DOMContentLoaded", () => {
    const regionSelect = document.getElementById("region");
    const comunaSelect = document.getElementById("comuna");

    const comunasPorRegion = {
        aisen: ["Aisén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O’Higgins", "Rio Ibañez", "Tortel"],
        antofagasta: ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal",  "Tocopilla"],
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
