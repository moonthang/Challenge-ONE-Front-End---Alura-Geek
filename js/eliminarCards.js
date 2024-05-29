import { script } from "./script.js";

const cardsContainer = document.querySelector("[data-cards]"); 
cardsContainer.addEventListener("click", 
async (event) => { 
    if (event.target.id === "basura") {
         const cardDiv = event.target.closest(".card"); 
         const producto = cardDiv.querySelector(".producto").textContent; 
         try { 
            await eliminarCard(producto); 
            cardDiv.remove(); 
            alert("Tarjeta eliminada con éxito!"); 
        } catch (error) { 
            console.error("Error al eliminar tarjeta", error); 
            alert("Error al eliminar tarjeta."); 
        } 
    } 
}); 

async function eliminarCard(producto) { 
    const cards = await script.listaCards(); 
    const card = cards.find(card => card.producto === producto); 
    if (!card) { 
        throw new Error("Tarjeta no encontrada"); 
    } 
    
    const url = `https://66566cbf9f970b3b36c55ba7.mockapi.io/bd/${card.id}`; 
    const response = await fetch(url, { 
        method: 'DELETE' 
    }); 
    
    if (!response.ok) { 
        throw new Error("Error al eliminar la tarjeta"); 
    } 
} 

export default eliminarCard;