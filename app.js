/*
n En app.js, usa querySelectorAll('.btn-agregar') para seleccionar todos los botones de agregar.
n Con un forEach, agrega un addEventListener('click') a cada botón.
n Dentro del evento, lee el nombre y precio del producto usando boton.dataset.nombre y boton.dataset.precio.
n Crea una función agregarAlCarrito(nombre, precio) que use createElement para crear un <li> con el nombre,
precio y un botón de eliminar (5), y lo agregue al carrito con appendChild.
n Primero haz que aparezca el en la lista. Luego te preocupas por el total
*/
const botonAgregar = document.querySelectorAll('.btn-agregar')
const listaCarrito = document.getElementById("lista-carrito")
const msgVacio = document.getElementById("msg-vacio")
const badge = document.querySelector(".badge")
const totalCarrito = document.getElementById("total")
const botonVaciar = document.getElementById('btn-vaciar')

let cantidadItems = 0
let acumulado = 0

botonAgregar.forEach(boton => {
    boton.addEventListener("click", function () {
        const nombre = boton.dataset.nombre
        const precio = parseFloat(boton.dataset.precio)
        console.log(typeof (nombre))
        console.log(typeof (precio))
        agregarAlCarrito(nombre, precio)
    })
});

botonVaciar.addEventListener("click", function(){
    vaciarCarrito();
})


function agregarAlCarrito(nombre, precio) {

    let li = document.createElement("li")

    msgVacio.style.display = "none"



    
    li.innerHTML = `<div class="row" style="padding: 1.3rem"> 
    <div>
    
    ${nombre}  ${precio}  
    
    <button type="button" class="btn-eliminar">eliminar</button>
    </div>
    </div>
    `
    listaCarrito.appendChild(li)
    cantidadItems++
    acumulado = acumulado + precio
    updateBadge(cantidadItems)
    updateTotal(acumulado)
    const btnEliminar = li.querySelector('.btn-eliminar')
    btnEliminar.addEventListener("click", function () {
        eliminarItem(li, precio)
    })

}

function updateBadge(cantidad) {
    badge.textContent = cantidad
}
function updateTotal(precio) {
    totalCarrito.textContent = precio
}

function eliminarItem(li, precio) {
    li.remove()
    cantidadItems--
    acumulado = acumulado - precio
    if (cantidadItems === 0) {
        msgVacio.style.display = "block"
    }
    updateBadge(cantidadItems)
    updateTotal(acumulado)
}
function vaciarCarrito(){
    listaCarrito.querySelectorAll('li:not(#msg-vacio)').forEach(li => li.remove());

    cantidadItems = 0
    acumulado = 0
    updateTotal(acumulado)
    updateBadge(cantidadItems)
    msgVacio.style.display = "block"
}

/*
Agrega un addEventListener('click') al botón#btn-vaciar.
n Al hacer clic, elimina todos los <li> del carrito del DOM con querySelectorAll y un forEach con .remove().
n Reinicia totalAcumulado = 0 y cantidadItems = 0.
n Llama a updateTotal() y updateBadge() para actualizar la UI.
n Muestra el mensaje 'Tu carrito está vacío' cambiando su display a 'block'.
n Para eliminar todos los ítems: lista.querySelectorAll('li:not(#msg-vacio)').forEach(li => li.remove())
*/