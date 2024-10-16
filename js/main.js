let articulos = [];
const MAX_ARTICULOS = 15;
function agregarArticulo() {
    if (articulos.length >= MAX_ARTICULOS) {
        alert("Alcanzaste el máximo de artículos permitidos.");
        return;
    }
    
    let nuevoArticulo = prompt("Ingresa un artículo:");
    if (nuevoArticulo) {
        articulos.push(nuevoArticulo);
        console.log(`Articulo agregado: ${nuevoArticulo}`);
        alert("Articulo agregado con éxito.");
    }
}
function mostrarArticulos() {
    if (articulos.length === 0) {
        alert("No hay artículos para mostrar.");
    } else {
        let listaArticulos = "Tus articulos son:\n";
        for (let i = 0; i < articulos.length; i++) {
            listaArticulos += `${i + 1}. ${articulos[i]}\n`;
        }
        alert(listaArticulos);
    }
}
function eliminarArticulos() {
    if (articulos.length === 0) {
        alert("No hay articulos para eliminar.");
        return;
    }
    
    let indice = parseInt(prompt("Ingresa el número de articulo que deseas eliminar:")) - 1;
    if (indice >= 0 && indice < articulos.length) {
        let articuloEliminado = articulos.splice(indice, 1);
        console.log(`Articulo eliminado: ${articuloEliminado}`);
        alert(`El articulo "${articuloEliminado}" ha sido eliminado.`);
    } else {
        alert("Número de articulo inválido.");
    }
}