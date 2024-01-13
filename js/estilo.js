// Definir productos
const productos = [
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 20 },
    { id: 3, nombre: "Producto 3", precio: 30 }
];

// Inicializar el carrito como un array vacío
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad:"));

    // Buscar el producto en el array de productos
    const productoEncontrado = productos.find(producto => producto.id === idProducto);

    if (productoEncontrado) {
        // Verificar si el producto ya está en el carrito
        const productoEnCarrito = carrito.find(item => item.producto.id === idProducto);

        if (productoEnCarrito) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        productoEnCarrito.cantidad += cantidad;
        } else {
            // Si el producto no está en el carrito, agregarlo
            carrito.push({ producto: productoEncontrado, cantidad });
        }

      console.log("Producto agregado al carrito:", productoEncontrado);
    } else {
      console.log("Producto no encontrado");
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    let mensaje = "Carrito de compras:\n";
    carrito.forEach(item => {
      mensaje += `${item.producto.nombre}: ${item.cantidad} unidades\n`;
    });
    alert(mensaje);
    console.log(mensaje);
}

// Función para calcular el total de la compra
function calcularTotal() {
    let total = 0;
    carrito.forEach(item => {
      total += item.producto.precio * item.cantidad;
    });
    return total;
}

// Ejemplos de uso
agregarAlCarrito();
agregarAlCarrito();
mostrarCarrito();

const totalCompra = calcularTotal();

alert("Total de la compra: $" + totalCompra);
console.log("Total de la compra:", totalCompra);
