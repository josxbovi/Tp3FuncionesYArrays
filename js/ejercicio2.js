/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario 
selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

const ciudades = [];
let ciudad = prompt("Ingrese el nombre de una ciudad:");

while (ciudad !== null) {
    ciudades.push(ciudad);
    ciudad = prompt("Ingrese el nombre de otra ciudad:");
}


document.write("<p>Arreglo de ciudades:</p>");
document.write(ciudades.join(", "));
document.write("<p>El largo del arreglo es: "+ ciudades.length + "</p>");
document.write("<p>Primera ciudad: "+ ciudades[0] + "</p>");
document.write("<p>Tercera ciudad: "+ ciudades[2] + "</p>");
document.write("<p>Ultima ciudad: "+ ciudades[ciudades.length - 1] + "</p>");
ciudades.push("Paris");
document.write("<p>Se agrego la ciudad de Paris al final del arreglo</p>");
document.write("<p>La segunda ciudad es: "+ ciudades[1] + "</p>");
ciudades[1] = "Barcelona";
document.write("<p>La segunda ciudad ahora es: "+ ciudades[1] + "</p>");








