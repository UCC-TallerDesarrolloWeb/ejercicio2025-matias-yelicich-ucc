/**
 * Permite convertir unidades entre metros, pies, pulgadas y yardas.
 * @method convertirUnidades Convertir Unidaes
 * @param {String} unidad - Unidad ingresada: metro, pie, pulgasa, yarda
 * @param {Int} valor - valor numerico ingresado por le usuarios (puede ser con coma)
 */
let convertirUnidades = (unidad, valor) => {
    let metro, pie, pulgada, yarda;

    console.log(valor);
    console.log(isNaN(valor))

    if(isNaN(valor)) {
        alert("El valor ingresaod no es un numero valido")
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";
    } else {
        if(unidad=="unid_metro") {
            metro = valor
            pie = 3.28*metro
            pulgada = 39.37*metro
            yarda = 1.0936*metro
        } else if(unidad=="unid_pie") {
            pie = valor
            metro = 0.3048*pie
            pulgada = 12*pie
            yarda = 0.3333*pie
        } else if(unidad=="unid_pulgada") {
            pulgada = valor
            metro = 0.0254*pulgada
            pie = 0.0833*pulgada
            yarda = 0.0277*pulgada
        } else if(unidad=="unid_yarda") {
            yarda = valor
            metro = 0.9144*yarda
            pie = 3*yarda
            pulgada = 36*yarda
        }
    }

    document.getElementById("metro").value = metro
    document.getElementById("pie").value = pie
    document.getElementById("pulgada").value = pulgada
    document.getElementById("yarda").value = yarda
}

/**
 * Permite convertir unidades entre grados y radianes.
 * @method convertirGR Convertir Unidaes
 * @param {String} id - Id de la unidad ingresada: grados o radianes
 * @param {Int} valor - valor numerico ingresado por le usuarios (puede ser con coma)
 */
let convertirGR = (id, value) => {
    let cantGrados, cantRadianes;
    if(id=="grados") {
        cantGrados = value;
        cantRadianes = cantGrados*Math.PI/180
        document.getElementById("radianes").value = cantRadianes
    } else {
        cantRadianes = value;
        cantGrados = cantRadianes*180/Math.PI
        document.getElementById("grados").value = cantGrados
    }
}

/**
 * Permite mostrar o oculatar un elemento div
 * @method mostrarOcultarDiv Modificar css
 * @param {String} id - Id de la unidad ingresada: grados o radianes
 * @param {Int} valor - valor numerico ingresado por le usuarios (puede ser con coma)
 */
let mostrarOcultarDiv = (id) => {
    const show = id == "mostrarDiv" ? "block" : "none";  
    document.getElementsByName("unDiv")[0].style.display = show;
}