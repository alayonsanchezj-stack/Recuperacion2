//Algoritmos secuenciales
function facturaDeserviciospublicos() {
    let consumo, precioUnidad, impuesto, subtotal, valorImpuesto, total;

consumo = parseFloat(prompt("Ingrese el valor de su consumo"));
precioUnidad = parseFloat(prompt("Ingrese el valor de precio en unidad"));
impuesto = parseFloat(prompt("Ingrese valor del impuesto"));

subtotal = consumo * precioUnidad
valorImpuesto = subtotal * impuesto / 100
totalFactura = subtotal + valorImpuesto

alert(
    "Factura de servicios publicos\n" +
    "\nEl valor de su consumo es: $" + subtotal.toLocaleString("es-CO") +
    "\nEl valor de sus impuestos es: $" + valorImpuesto.toLocaleString("es-CO") +
    "\nSu total a paguar es: $" + totalFactura.toLocaleString("es-CO")
);

}

function cálculoDeLaDistanciaRecorridaPorUnVehículo() {
    let velocidad, tiempo;

velocidad = parseFloat(prompt("Ingrese la velocidad en km/h"));
tiempo = parseFloat(prompt("Ingrese el tiempo del recorrido en horas"));

distancia = velocidad * tiempo

alert(
    "El resultado de su recorrido es\n" +
    "\nEl resultado de la velocidad es: " + velocidad + " km/h" +
    "\nEl resultado del tiempo es: " + tiempo + " horas" +
    "\nEl total del recorrido es: " + distancia + " km"
);

}

function cálculoDelCostoDeUnViaje() {
    let distancia, costoKilometro, total;

distancia = parseFloat(prompt("Ingrese el valor de la distancia"));
costoKilometro = parseFloat(prompt("Ingrese el valor del costo en kilometro"));

total = distancia * costoKilometro

alert(
    "\nEl valor de la distancia es: " + distancia + " km" +
    "\nEl valor del costo en kilometros es: " + costoKilometro +
    "\nEl valor total es: $" + total.toLocaleString("es-CO")
);

}

//Algoritmos Condicionales

function clasificaciónDeUnaSolicitudDePréstamo() {
    let nombre, ingresos, gastos, historial, disponible, resultado;

nombre = prompt("Ingrese el nombre del solicitante");
ingresos = parseFloat(prompt("Ingrese el valor de los ingresos mensuales"));
gastos = parseFloat(prompt("Ingrese el valor de los gastos mensuales"));
historial = prompt("Ingrese el valor del historial crediticio (positivo o negativo)");

if (nombre === null || nombre.trim() === "" ||
    isNaN(ingresos) || ingresos < 0 ||
    isNaN(gastos) || gastos < 0 ||
    historial === null ||
    !["positivo", "negativo"].includes(historial.trim().toLowerCase())) {

    alert("Datos inválidos");

} else {

    disponible = ingresos - gastos
    resultado = ""

    if (ingresos <= gastos) {
        resultado = "Saldo insuficiente";
    }
    else if (historial.trim().toLowerCase() === "negativo") {
        resultado = "Historial crediticio negativo";
    }
    else if (disponible >= 1000000) {
        resultado = "Cumple con las condiciones iniciales";
    }
    else {
        resultado = "PENDIENTPendiente requiere revisión";
    }

    alert(
        "Solicitante: " + nombre +
        "\nEl total de su dinero disponible es: $" + disponible.toLocaleString("es-CO") +
        "\nEl resultado es: " + resultado
    );
}

}

function cálculoDeTarifaDeAlojamiento() {
    let nombre, habitacion, temporada, noches, tarifa, descuento, total;
nombre = prompt("Ingrese el nombre del huésped");
habitacion = prompt("Ingrese el tipo de habitación:\n" +
                    "Estándar\nEjecutiva\nSuite"
);

temporada = prompt(
    "Ingrese la temporada:\nAlta o Baja"
);

noches = parseInt(prompt("Ingrese la cantidad de noches"));

if (nombre === null || nombre.trim() === "" ||
    habitacion === null ||
    temporada === null ||
    isNaN(noches) || noches <= 0 ||
    !["estándar", "estandar", "ejecutiva", "suite"].includes(habitacion.trim().toLowerCase()) ||
    !["alta", "baja"].includes(temporada.trim().toLowerCase())) {

    alert("Verifique los datos ingresados");

} else {

    tarifa = 0
    subtotal = 0
    descuento = 0
    total = 0

    habitacion = habitacion.trim().toLowerCase();
    temporada = temporada.trim().toLowerCase();

    if (habitacion === "estándar" || habitacion === "estandar") {
        tarifa = 150000
    }
    else if (habitacion === "ejecutiva") {
        tarifa = 250000
    }
    else if (habitacion === "suite") {
        tarifa = 400000
    }

    subtotal = tarifa * noches;

    if (temporada === "alta") {
        subtotal = subtotal * 1.20
    }

    if (noches >= 5) {
        descuento = subtotal * 0.10
    }

    total = subtotal - descuento

    alert(
        "Huésped: " + nombre +
        "\nSu habitación es: " + habitacion +
        "\nLa temporada es: " + temporada +
        "\nEl total de las noches es: " + noches +
        "\nEl valor de la tarifa nocturna es: $" + tarifa.toLocaleString("es-CO") +
        "\nEl total de su descuento es: $" + descuento.toLocaleString("es-CO") +
        "\nsu total a paguar es: $" + total.toLocaleString("es-CO")
    );
}

}

function clasificaciónDelConsumoDeEnergíaEléctrica() {
    let consumo, precio, clasificacion, total;
    
consumo = parseFloat(prompt("Ingrese el valor de los kilovatios consumidos"));
precio = parseFloat(prompt("Ingrese el valor del precio por kilovatio"));

clasificacion = ""
total = 0

total = consumo * precio

if (consumo <= 100) {
    clasificacion = "Consumo bajo";
}
else if (consumo <= 200) {
    clasificacion = "Consumo medio";
}
else {
    clasificacion = "Consumo alto";
}

alert(
    "\nSu consumo es: " + consumo + " kWh" +
    "\nEl valor de la clasificacion es: " + clasificacion +
    "\nEl total a pagar es: $" + total.toLocaleString("es-CO")
);

}

