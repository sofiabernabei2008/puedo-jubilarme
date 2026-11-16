
// Pedimos la edad al usuario
let edad = Number(prompt("¿Cuántos años tenés?"));

// Pedimos el sexo al usuario
let sexo = prompt("Ingresá tu sexo: mujer u hombre").toLowerCase();

// Verificamos si puede jubilarse
if (
    (sexo === "mujer" && edad >= 60) ||
    (sexo === "hombre" && edad >= 65)
) {
    console.log("¡Ya estás en edad de jubilarte!");
} else {
    console.log("Todavía no estás en edad de jubilarte.");
}
