
let boton = document.getElementById("calcular");

boton.onclick = function() {

    let edad = parseInt(document.getElementById("edad").value);
    let sexo = document.getElementById("sexo").value;
    let resultado = document.getElementById("resultado");

    if (edad >= 0 && sexo !== "" &&
        ((sexo === "mujer" && edad >= 60) ||
        (sexo === "hombre" && edad >= 65))) {

        resultado.innerHTML = "¡Podés jubilarte! 🎉";

    } else if (edad > 0 && sexo !== "") {

        resultado.innerHTML = "Todavía no podés jubilarte.";

    } else {

        resultado.innerHTML = "Ingresá una edad y seleccioná tu género.";

    }

};

