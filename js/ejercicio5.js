/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function mostrarInfo(cadena) {
    let mensaje = "";
    if (cadena === cadena.toUpperCase()) {
        mensaje = "La cadena esta formada solo por mayusculas";
    } else if (cadena === cadena.toLowerCase()) {
        mensaje = "La cadena esta formada solo por minusculas";
    } else {
        mensaje = "La cadena esta formada por mayusculas y minusculas";
    }
    return mensaje;
}

let cadena = prompt("Ingrese una cadena de texto:");
document.write("<p>" + mostrarInfo(cadena) + "</p>");

