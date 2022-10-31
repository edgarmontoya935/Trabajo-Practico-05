// 😺 // 😸 // 😹

function ActivarConsola() {

console.log("***  Bienvenido ***");
console.log("***  Ejercicio 01 ***");
console.log(" ");
console.log("Iniciando script...");
console.log(" ");

aux = prompt("Ingrese la cantidad de gatos a mostrar");

cantidadDeGatos = parseInt(aux);

console.log("*** Datos Ingresados ***");
console.log(" ");
console.log("Gatos Total: " + cantidadDeGatos);
console.log(" ");

for ( g = 1 ; g <= cantidadDeGatos ; g++ ) {

        gatos = g % 3;
        if ( gatos == 1 ) {
        console.log("Gato #" + g + ": 😺");
        }

        if ( gatos == 2 ) {
        console.log("Gato #" + g + ": 😸");
        }

        if ( gatos == 0 ) {
        console.log("Gato #" + g + ": 😹");
        }
}

console.log(" ");
console.log("Finalizando script...");
console.log(" ");
console.log("*** Gracias, vuelva pronto ***");
console.log(" ");
}