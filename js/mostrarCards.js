import { script } from "./script.js";

const cards = document.querySelector("[data-cards]");

function construirCard(imagen, producto, precio) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = ` 
    <img class="imagen" src="${imagen}" alt="Imagen Producto"> 
    <div class="card-container--info"> 
        <p class="producto">${producto}</p> 
        <div class="card-container--value"> 
            <p class="precio">COP$ ${precio}</p> 
            <img id="basura" src="img/basura.png" alt="Basura"> 
        </div> 
    </div> 
    `; 
    return card; 
}

async function listarCards() { 
    const listaApi = await script.listaCards(); 
    listaApi.forEach(elemento => cards.appendChild(
        construirCard(elemento.imagen, elemento.producto, elemento.precio)
    )); 
} 

listarCards();