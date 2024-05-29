import { script } from "./script.js";

const formulario = document.querySelector("[data-formulario]");

async function crearCard(evento) {
    evento.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const producto = document.querySelector("[data-producto]").value;
    const precio = document.querySelector("[data-precio]").value;

    await script.creaCard(imagen, producto, precio);

    alert("!Tarjeta añadida con éxito!");
}

formulario.addEventListener('submit', evento => crearCard(evento));