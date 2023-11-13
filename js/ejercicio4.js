/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

function esPar(num) {
    if (num % 2 == 0) {
        return "<p>El número " + num + " es par.</p>";
    } else {
        return "<p>El número " + num + " es impar.</p>";
    }
}

let num = parseInt(prompt("Introduce un número entero:"));
document.write(esPar(num));