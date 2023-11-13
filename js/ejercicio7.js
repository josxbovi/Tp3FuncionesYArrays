/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function tablaMultiplicar(num2) {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(num2 * i);
    }
    return tabla;
}

let num2 = parseInt(prompt("Introduce un número entero:"));
document.write("<p>Tabla de multiplicar del " + num2 + ":</p>");
document.write(tablaMultiplicar(num2).join(", "));

