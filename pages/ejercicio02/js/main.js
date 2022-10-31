// 🐈 // 🐾

function ActivarConsola() {

console.log("***  Bienvenido ***");
console.log("***  Ejercicio 02 ***");
console.log(" ");
console.log("Iniciando script...");
console.log(" ");

gatos = prompt("Ingrese la cantidad de gatos a mostrar");
pasos = prompt("Ingrese la cantidad de pasos a mostrar");

cantidadDeGatos = parseInt(gatos);
cantidadDePasos = parseInt(pasos);

console.log("*** Datos Ingresados ***");
console.log(" ");
console.log("Gatos Total: " + cantidadDeGatos);
console.log("Pasos Total: " + cantidadDePasos);
console.log(" ");

/***********************************************************/
/* Calculando la cantidad de pasos ingresados para mostrar */
/***********************************************************/

pasostotal = "";

for ( p = 1 ; p <= cantidadDePasos ; p++ ){

    pasostotal = pasostotal + "🐾";

}

/***********************************************************/
/* Calculando la cantidad de gatos ingresados para mostrar */
/***********************************************************/

for ( g = 1 ; g <= cantidadDeGatos ; g++ ) {

    console.log("Gato #" + g + ": 🐈" + pasostotal);

}

console.log(" ");
console.log("Finalizando script...");
console.log(" ");
console.log("*** Gracias, vuelva pronto ***");
}