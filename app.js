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
const totalCarrito = document.getElementById("total")

let cantidadItems = 0 
let acumulado = 0

botonAgregar.forEach(boton => {
    boton.addEventListener("click", function(){
    const nombre = boton.dataset.nombre
    const precio = parseFloat(boton.dataset.precio)
    console.log(typeof(nombre))
    console.log(typeof(precio))
    agregarAlCarrito(nombre,precio)
    calcularTotalAcumulado(precio)
    })  
});


function agregarAlCarrito(nombre, precio){

    let li = document.createElement("li")
    
    //const tarjetaProducto =`${nombre}  ${precio} <br>  <button type="button" class="btn-eliminar">eliminar</button>`

    li.innerHTML= `${nombre}  ${precio} <br> 
    <div>
    <button type="button" class="btn-eliminar">eliminar</button>
    </div>
    `
    listaCarrito.appendChild(li)
    cantidadItems++
    acumulado = acumulado + precio
    updateBadge(cantidadItems)
    updateTotal(acumulado)
    cantidadItems--
    const btnEliminar= li.querySelector('.btn-eliminar')
    btnEliminar.addEventListener("click", function(){
        eliminarItem(li,precio)
        cantidadItems--
        updateBadge(cantidadItems)
    })

}

function updateBadge(cantidad){
    badge.textContent = cantidad
}
function updateTotal(precio){
    totalCarrito.textContent = precio
}

function eliminarItem(li,precio){
    li.remove()
    acumulado= acumulado - precio
    updateTotal(acumulado)
}
