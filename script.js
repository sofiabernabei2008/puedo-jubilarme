
// Buscamos los elementos de HTML
let edad = document.getElementById("edad");
let sexo = document.getElementById("sexo");
let boton = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

// Cuando hacemos clic en el botón
boton.addEventListener("click", function() {

    // Obtenemos los valores ingresados
    let edadIngresada = Number(edad.value);
    let sexoIngresado = sexo.value;

    // Verificamos que los datos sean correctos
    if (edad.value === "" || sexoIngresado === "" || edadIngresada <= 0) {
        resultado.textContent = "Por favor, ingresá una edad válida y seleccioná tu sexo.";

    } else {

        // Extra Bonus: un solo if para determinar si puede jubilarse
        if (
            (sexoIngresado === "mujer" && edadIngresada >= 60) ||
            (sexoIngresado === "hombre" && edadIngresada >= 65)
        ) {
            resultado.textContent = "¡Ya estás en edad de jubilarte! 🎉";

        } else {
            resultado.textContent = "Todavía no estás en edad de jubilarte.";
        }
    }

});
