/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/

const lado1 = parseInt(prompt("Ingrese el valor del lado 1:"));
const lado2 = parseInt(prompt("Ingrese el valor del lado 2:"));

function perimetro(a, b) {
    return 2 * (a + b);
}

document.write("<p>El perimetro del rectangulo es: " + perimetro(lado1, lado2) + "</p>");

