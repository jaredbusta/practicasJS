
function calculaPrecioConDescuento(precioOriginal, descuento){
    const porcentajePrecioConDescuento =100 - descuento;
    const precioConDescuento =  (precioOriginal * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

const precioOriginal=2530;
const descuento =15;

function calcularPrecio(){
    const precio= document.getElementById("precio").value;
    const descuento= document.getElementById("descuento").value;

    const precioNuevo = calculaPrecioConDescuento(precio, descuento);
    document.getElementById("precio_a_pagar").innerHTML = "El precio a pagar es $ "+  parseFloat(precioNuevo).toFixed(2) ; 
}

