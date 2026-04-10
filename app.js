/*
n En app.js, usa querySelectorAll('.btn-agregar') para seleccionar todos los botones de agregar.
n Con un forEach, agrega un addEventListener('click') a cada botón.
n Dentro del evento, lee el nombre y precio del producto usando boton.dataset.nombre y boton.dataset.precio.
n Crea una función agregarAlCarrito(nombre, precio) que use createElement para crear un <li> con el nombre,
precio y un botón de eliminar (5), y lo agregue al carrito con appendChild.
n Primero haz que aparezca el en la lista. Luego te preocupas por el total
*/
const botonAgregar =document.querySelectorAll('.btn-agregar')

const listaCarrito = document.getElementById("lista-carrito")
const badge = document.querySelector(".badge")

let cantidadItems = 0 

botonAgregar.forEach(boton => {
    boton.addEventListener("click", function(){
    const nombre = boton.dataset.nombre
    const precio = boton.dataset.precio
    agregarAlCarrito(nombre,precio)
    })  
});
const botonEliminar = document.querySelector(".btn-eliminar")
botonEliminar.addEventListener("click", eliminarProductoCarrito())

function agregarAlCarrito(nombre, precio){

    let producto = document.createElement("li")

    //const tarjetaProducto =`${nombre}  ${precio} <br>  <button type="button" class="btn-eliminar">eliminar</button>`

    producto.innerHTML= `${nombre}  ${precio} <br> 
    <div>
    <button type="button" class="btn-eliminar">eliminar</button>
    </div>
    `
    listaCarrito.appendChild(producto)
    cantidadItems++
    updateBadge(cantidadItems)
}
function updateBadge(cantidad){
    badge.textContent = cantidad
}
function eliminarProductoCarrito(){

    listaCarrito.lastElementChild.remove()
    cantidadItems--
    updateBadge(cantidadItems)
}
