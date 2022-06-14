let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id5 = document.getElementById("id5");
let lectura_de_id1;
let lectura_de_id2;

function sumar () {
    lectura_de_id1 = parseInt(id1.value);
    lectura_de_id2 = parseInt(id2.value);
    id5.innerHTML = Math.floor(lectura_de_id1 + lectura_de_id2)
}

function restar () {
    lectura_de_id1 = parseInt(id1.value);
    lectura_de_id2 = parseInt(id2.value);
    id5.innerHTML = Math.floor(lectura_de_id1 - lectura_de_id2)
}

function multiplicar () {
    lectura_de_id1 = parseInt(id1.value);
    lectura_de_id2 = parseInt(id2.value);
    id5.innerHTML = Math.floor(lectura_de_id1 * lectura_de_id2)
}

function dividir () {
    lectura_de_id1 = parseInt(id1.value);
    lectura_de_id2 = parseInt(id2.value);
    id5.innerHTML = Math.floor(lectura_de_id1 / lectura_de_id2)
}

suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
multiplicacion.addEventListener("click", multiplicar);
division.addEventListener("click", dividir);
