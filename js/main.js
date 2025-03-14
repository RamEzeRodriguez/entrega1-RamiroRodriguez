// Carrito de compras
let carrito = [];
let productos = [];



// Función para mostrar los productos en la página web
async function mostrarProductos() {
  try {
    const response = await fetch('productos.json');
    if (!response.ok) {
      throw new Error(`Error loading products: ${response.status}`);
    }
    productos = await response.json(); // Carga de productos desde JSON
    const productosContainer = document.getElementById("productos-container");
    productos.forEach((producto) => {
      const productoDiv = document.createElement("div");
      // carrusel
      let carouselHtml = `<div class="carousel-container">`;
      carouselHtml += `<img class="carousel-image" src="${producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0] : './img/placeholder.jpg'}" alt="${producto.nombre}">`;
      carouselHtml += `<div class="carousel-dots">`;

      if (producto.imagenes && producto.imagenes.length > 0) {
        producto.imagenes.forEach((image, index) => {
          carouselHtml += `<span class="dot ${index === 0 ? 'active' : ''}" 
                                   onclick="changeImage(${productos.indexOf(producto)}, ${index})"></span>`;
        });
      } 
      carouselHtml += `</div>`;

      carouselHtml += `</div>`;

      productoDiv.innerHTML = `
              ${carouselHtml}
              <h3>${producto.nombre}</h3>
              <p>${producto.descripcion}</p>
              <p>Precio: $${producto.precio}</p>
              <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
          `;
      productoDiv.setAttribute('id', productos.indexOf(producto));
      productosContainer.appendChild(productoDiv);
    });
  } catch (error) {
    console.error("An error has occurred:", error);
    document.getElementById("productos").innerHTML = "<p>Error cargando productos. Intente nuevamente más tarde.</p>";
  }
}

// Funcion para actualizar el contador del carrito
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = carrito.length;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
  const producto = productos.find((producto) => producto.nombre === nombreProducto);
  if (producto) {
    carrito.push(producto);
    guardarCarrito();
    updateCartCount();
  } else {
    console.error(`Producto ${nombreProducto} not found`);
  }
}




// Función para guardar el carrito en el almacenamiento local
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Función para cargar el carrito desde el almacenamiento local
function cargarCarrito() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    updateCartCount(); 
  }
}

// Evento para cargar el carrito al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
  cargarCarrito();
});


