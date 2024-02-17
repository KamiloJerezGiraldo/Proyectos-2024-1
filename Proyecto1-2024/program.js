
const readlineSync = require('readline-sync');

const cantidadProductos = +readlineSync.question(`Cantidad de productos: `);

let costoTotalFlete = 0;
let productoMayorDimensiones = null;
let promedioCostoProductoFlete = 0;
let totalImpuestosFlete = 0;

for(let i = 0; i < cantidadProductos; i++){
    const nombreProducto = readlineSync.question(`Nombre del producto ${i+1}: `);
    const largo = +readlineSync.question(`Ingrese el largo del producto en centímetros: `);
    const ancho = +readlineSync.question(`Ingrese el ancho del producto en centímetros: `);
    const profundidad = +readlineSync.question(`Ingrese la profundidad del producto en centímetros: `);
    const tamaño = largo * ancho * profundidad;
    const costoFlete = tamaño * 100; // $100 por centímetro
    let impuesto = 0;

    if (tamaño > 1000 && tamaño < 10000) {
        impuesto = costoFlete * 0.1; // 10% de impuesto
    } else {
        impuesto = costoFlete * 0.2; // 20% de impuesto
    }

    const costoTotalProducto = costoFlete + impuesto;
    costoTotalFlete += costoTotalProducto;
    totalImpuestos += impuesto;
    
    // Para verificar si es el producto es de mayores dimensiones
    if (!productoMayorDimensiones || tamaño > productoMayorDimensiones.tamaño) {
        productoMayorDimensiones = {
            nombre: nombreProducto,
            tamaño: tamaño
        };
    }
}
// Calcular promedio del costo de productos en el flete incluyendo impuestos
costoPromedioFlete = costoTotalFlete / cantidadProductos;

console.log(`1. Costo total del flete: ${costoTotalFlete}`);
console.log(`2. Producto de mayores dimensiones: ${productoMayorDimensiones.nombre}`);
console.log(`3. Promedio del costo de productos en el flete incluyendo impuestos: ${costoPromedioFlete}`);
console.log(`4. Total de impuestos por el flete: ${totalImpuestos}`);
