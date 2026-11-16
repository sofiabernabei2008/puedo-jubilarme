
let boton = document.getElementById("calcular");

boton.onclick = function() {

    let edad = Number(document.getElementById("edad").value);

    let sexo = document.getElementById("sexo").value;

    let resultado = document.getElementById("resultado");

    if (
        (sexo === "mujer" && edad >= 60) ||
        (sexo === "hombre" && edad >= 65)
    ) {

        resultado.textContent = "¡Podés jubilarte! 🎉";

    } else {

        resultado.textContent = "Todavía no podés jubilarte.";

    }

    if (edad <= 0 || sexo === "") {

        resultado.textContent = "Por favor, ingresá una edad válida y seleccioná tu género.";

    }

};
