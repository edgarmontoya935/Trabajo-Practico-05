// 🐈 // 🐈‍⬛ // 🐾

function ActivarConsola() {

console.log("***  Bienvenido ***");
console.log("***  Ejercicio 03 ***");
console.log(" ");
console.log("Iniciando script...");
console.log(" ");

gatos = prompt("Ingrese la cantidad de gatos a mostrar");
pasos = prompt("Ingrese la cantidad de pasos a mostrar");

cantidadDeGatos = parseInt(gatos);
cantidadDePasos = parseInt(pasos);

pasostotal = "";

console.log("*** Datos Ingresados ***");
console.log(" ");
console.log("Gatos Total: " + cantidadDeGatos);
console.log("Pasos Total: " + cantidadDePasos);
console.log(" ");

for ( p = 1 ; p <= cantidadDePasos ; p++ ){

    pasostotal = pasostotal + "🐾";

}

for ( g = 1 ; g <= cantidadDeGatos ; g++ ) {

    gatos = g % 2;
    if ( gatos == 1 ) {
    console.log("Gato #" + g + ": 🐈" + pasostotal);
    }

    if ( gatos == 0 ) {
    console.log("Gato #" + g + ": 🐈‍⬛" + pasostotal);
    }

}

console.log(" ");
console.log("Finalizando script...");
console.log(" ");
console.log("*** Gracias, vuelva pronto ***");
}