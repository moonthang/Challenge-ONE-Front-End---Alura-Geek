async function listaCards() {
    const conexion = await fetch('https://66566cbf9f970b3b36c55ba7.mockapi.io/bd');
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function creaCard(imagen, producto, precio) {
    const conexion = await fetch("https://66566cbf9f970b3b36c55ba7.mockapi.io/bd", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            imagen: imagen,
            producto: producto,
            precio: precio
        })
    });

    if (!conexion.ok) {
        throw new Error('Error al crear tarjeta');
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const script = {
    listaCards,
    creaCard
};