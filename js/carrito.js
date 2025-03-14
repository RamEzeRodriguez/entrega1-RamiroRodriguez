// carrito.js
const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalCarritoElement = document.getElementById("total-carrito");

// Funcion para calcular precio total del carrito
function calcularTotalCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    return total;
}

// Funcion para actualizar el precio total del carrito
function actualizarTotalCarrito() {
    const total = calcularTotalCarrito();
    totalCarritoElement.textContent = `Total: $${total}`;
}

// Funcion para remover un producto del carrito
function eliminarDelCarrito(nombreProducto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const index = carrito.findIndex(producto => producto.nombre === nombreProducto);
    if (index > -1) {
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    mostrarProductosDelCarrito();
    actualizarTotalCarrito();
}

// Funcion para borrar todo el carrito
function eliminarTodoDelCarrito() {
    localStorage.removeItem("carrito");
    mostrarProductosDelCarrito(); 
    actualizarTotalCarrito();
}

// Funcion para mostrar los productos del carrito
function mostrarProductosDelCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        const emptyDiv = document.createElement("div");
        emptyDiv.innerHTML = `
            <p>Su carrito esta vacio</p>
        `;
        contenedorCarrito.appendChild(emptyDiv);
    } else {
        carrito.forEach((producto) => {
            const productoDiv = document.createElement("div");
            productoDiv.classList.add('producto-carrito');
            const imagePath = `../${producto.imagenes[0]}`;

            productoDiv.innerHTML = `
              <img src="${imagePath}" alt="${producto.nombre}" class="carrito-image">
              <div>
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="eliminar-btn" data-nombre="${producto.nombre}">Eliminar</button>
              </div>
            `;
            contenedorCarrito.appendChild(productoDiv);
        });
        const clearCartButton = document.createElement("button");
        clearCartButton.textContent = "Borrar todo";
        clearCartButton.id = "clear-cart-btn";
        clearCartButton.addEventListener("click", eliminarTodoDelCarrito);
        contenedorCarrito.appendChild(clearCartButton);

        const removeButtons = document.querySelectorAll(".eliminar-btn");
        removeButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const nombreProducto = event.target.dataset.nombre;
                eliminarDelCarrito(nombreProducto);
            });
        });
    }
    actualizarTotalCarrito();
}

document.addEventListener("DOMContentLoaded", mostrarProductosDelCarrito);
