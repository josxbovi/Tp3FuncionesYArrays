/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.
*/

const dados = [];
const sumaDados = [];
let suma = 0;
let dado1 = 0;
let dado2 = 0;

for (let i = 0; i < 50; i++) {
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    suma = dado1 + dado2;
    dados.push(dado1);
    dados.push(dado2);
    sumaDados.push(suma);
}

document.write("<p>Resultados de los lanzamientos de dados:</p>");
document.write(dados.join(", "));
document.write("<p>Resultados de las sumas de los lanzamientos de dados:</p>");
document.write(sumaDados.join(", "));
