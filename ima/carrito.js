const platos = [
    { cod_plato: 1, nom_plato: "Ranga", precio_plato: 25, foto_plato: "ima/ranga.jpg" },
    { cod_plato: 2, nom_plato: "Fricase", precio_plato: 20, foto_plato: "ima/fricase.jpg" },
    { cod_plato: 3, nom_plato: "Lechon", precio_plato: 15, foto_plato: "ima/lechon.jpg" }
];

let carrito = [];

function agregarCarrito(id) {
    const producto = platos.find(p => p.cod_plato === id);
    const repetido = carrito.find(item => item.cod_plato === id);

    if (repetido) {
        repetido.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    mostrarCarrito();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
    const data = localStorage.getItem("carrito");
    if (data) carrito = JSON.parse(data);
}

function mostrarCarrito() {
    const contenedor = document.getElementById("carrito");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío</p>";
        return;
    }

    carrito.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item-carrito");

        div.innerHTML = `
            <h4>${item.nom_plato}</h4>
            <p>Precio: Bs. ${item.precio_plato}</p>
            <p>Cantidad: ${item.cantidad}</p>
            <button onclick="quitar(${item.cod_plato})">Quitar</button>
        `;

        contenedor.appendChild(div);
    });
}

function quitar(id) {
    carrito = carrito.filter(item => item.cod_plato !== id);
    guardarCarrito();
    mostrarCarrito();
}

cargarCarrito();
mostrarCarrito();
