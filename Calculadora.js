let parseadoInputUsuario1 = null;
let parseadoInputUsuario2 = null;
let arrayDeDatos = [];

// INPUT 1
let inputUsuario1 = prompt("Introduce el primer número");
if (contenerNumero(inputUsuario1) === true) {
    parseadoInputUsuario1 = parseInt(inputUsuario1);
    console.log(parseadoInputUsuario1);
} else {
    console.log("Debes introducir un número");
    console.log(parseadoInputUsuario1);
}

// INPUT 2
let inputUsuario2 = prompt("Puedes introducir un segundo número");
if (contenerNumero(inputUsuario2) === true) {
    parseadoInputUsuario2 = parseInt(inputUsuario2);
    console.log(parseadoInputUsuario2);
} else {
    console.log("No introduciste un segundo número");
    console.log(parseadoInputUsuario2);
}

// CONDICIONALES
if (parseadoInputUsuario1 !== null && parseadoInputUsuario2 !== null) {
    // SI EXISTEN VALORES 1 Y 2:
    calcular2Nums(parseadoInputUsuario1, parseadoInputUsuario2);
} else if (parseadoInputUsuario1 !== null && parseadoInputUsuario2 === null) {
    // SI SOLO EXISTE EL VALOR 1:
    calcular1Num(parseadoInputUsuario1);
} else {
    // SI NO EXISTE NINGÚN VALOR:
    console.log("Debes introducir al menos un número");
}

// FUNCIONES
function calcular2Nums(num1, num2) {
    arrayDeDatos.push(
        `Suma: ${(num1 + num2).toFixed(3).replace(/[,.]000$/, "")}`
    );
    arrayDeDatos.push(
        `Resta: ${(num1 - num2).toFixed(3).replace(/[,.]000$/, "")}`
    );
    arrayDeDatos.push(
        `Multiplicacion: ${(num1 * num2).toFixed(3).replace(/[,.]000$/, "")}`
    );
    arrayDeDatos.push(
        `Division: ${(num1 / num2).toFixed(3).replace(/[,.]000$/, "")}`
    );
    console.log(arrayDeDatos);
}

function calcular1Num(num1) {
    const squareRoot = Math.sqrt(num1);
    console.log(`La raíz cuadrada de ${num1} es ${squareRoot}`);
}

function contenerNumero(num1) {
    return /[0-9]/.test(num1);
}
