// AIRLINES - PROYECTO DEL TEMA 3
// DATOS
const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VARIABLES DE SCOPE GLOBAL:
let sumOfPrices = 0;
let sumOfScales = 0;

// BIENVENIDA AL USUARIO
const askUserPrompt = prompt("Hola, ¿cuál es tu nombre de usuario?");
console.log(
    `Bienvenido, ${askUserPrompt}, a continuación le mostraremos información relevante sobre los vuelos:
--------------------`
);

// INFORMACIÓN GENERAL SOBRE LOS VUELOS
const displayOfFlights = flights.map((flight) => {
    if (flight.scale) {
        console.log(
            `El vuelo con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} y realiza escala`
        );
    } else {
        console.log(
            `El vuelo con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} y no hace escala`
        );
    }
});

// CALCULO DEL PRECIO PROMEDIO DE UN VUELO
for (let i = 0; i < flights.length; i++) {
    sumOfPrices = sumOfPrices + flights[i].cost;
    const averagePriceCalc = sumOfPrices / flights.length;
    if (i === flights.length - 1) {
        console.log(`--------------------
El precio medio por vuelo es de ${averagePriceCalc} euros`);
    }
}

// NUMERO DE VUELOS HACIENDO ESCALA
for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale) {
        sumOfScales = sumOfScales + 1;
    }
    if (i === flights.length - 1) {
        console.log(`--------------------
El numero de vuelos que hacen escala es ${sumOfScales}
--------------------`);
    }
}

// MOSTRAR 5 ÚLTIMOS VUELOS Y SUS DESTINOS
for (let i = flights.length - 5; i < flights.length; i++) {
    console.log(
        `El destino del vuelo con ID ${flights[i].id} tiene destino a ${flights[i].to}`
    );
}
