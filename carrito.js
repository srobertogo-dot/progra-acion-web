let carrito = [];

// Agregar plato al carrito
function agregarCarrito(id) {
    const plato = platos.find(p => p.cod_plato === id);
    const repetido = carrito.find(p => p.cod_plato === id);

    if(repetido){
        repetido.cantidad++;
    } else {
        carrito.push({...plato, cantidad: 1});
    }

    actualizarCarrito();
}

// Mostrar panel y contador
function actualizarCarrito() {
    const panel = document.getElementById("lista-carrito");
    const contador = document.getElementById("contador-carrito");

    contador.textContent = carrito.reduce((acc, p) => acc + p.cantidad, 0);

    panel.innerHTML = "";

    carrito.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("item-carrito");
        div.innerHTML = `
            ${item.nom_plato} - Bs. ${item.precio_plato} x ${item.cantidad}
            <button onclick="eliminarItem(${index})">❌</button>
        `;
        panel.appendChild(div);
    });
}

// Eliminar item
function eliminarItem(index){
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Mostrar/ocultar panel carrito
function toggleCarrito(){
    document.getElementById("carrito-panel").classList.toggle("activo");
}
