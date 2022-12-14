let carrito = [];
let total = [];


const URL ='./productos.json'


const contenidoDOM = document.querySelector("#productos")
const cargandoDOM = document.querySelector(".spinner-border")

const retornoCardContenido = (productos) => {
    const { nombre, precio, genero, } = productos

    return `  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"> ${nombre}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${precio}</li>
      <li class="list-group-item">${genero}</li>
    </ul>
    <button class="cardsBtn">
      Agregar al carrito 
    </button>
  </div>`
}

const retornoCardError = () => {
    return `<div class="alert alert-primary d-flex align-items-center" role="alert">
    <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
    <div>
     Algo salio mal, intente nuevamente.
    </div>
  </div>`
}

let itemsContainer = document.querySelector('#productos')

const obtenerContenido = () => {
    fetch("/productos.json")

        .then((response) => response.json(productos))

        .then((data) => {

            data.forEach((productos) => {

                itemsContainer.innerHTML += retornoCardContenido(productos)

            })

        })
};

obtenerContenido(URL)

const agregarAlCarrito = document.querySelectorAll('.cardsBtn')
agregarAlCarrito.forEach(agregarAlCarritoBtn => {
    agregarAlCarritoBtn.addEventListener('click', clickAgregarCarrito);
});

boton = document.querySelectorAll('.cardsBtn')

function agregarItem(carrito) {
    carritoContainer.innerHTML = "#carrito"
    carrito.forEach(elm => {
        carritoContainer.innerHTML += `
        <ul>
            <li>${producto.nombre} - ${producto.precio}</li>
        </ul>
        `
    })
}

function guardarCompras() {
    carrito.length > 0 && localStorage.setItem('productosCarrito', JSON.stringify(carrito))
}

function calcularCarrito() {
    total.push(precioConIva)
    console.log(carrito)
    let final = total.reduce((a, b) => a + b, 0)
    carritoTotal.innerHTML = `<p> Total a pagar mas 21%: ${final}</p>`
}

const confirmarCarrito = () => {
    guardarCompras() ? alert ('Desea seguir comprando'):('Seleccione mas productos');
 } 

let confirmCompras = () => {
    Swal.fire({
        title: confirmarCarrito,
        icon: 'question',
        showConfirmButton: false,
        showDenyButton: true,
    })
}

const pagar = document.querySelectorAll('#compra')
pagar.forEach(pagarBtn => {
    pagarBtn.addEventListener('click', calcularCarrito);
});

boton = document.querySelectorAll('#compra')

function recuperoCarrito() {
    let miCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || []
    agregarItem(miCarrito)
    carrito.forEach(elm => {
        carritoContainer.innerHTML += `
        <ul>
            <li>${producto.nombre} - ${producto.precio}</li>
        </ul>
        `
    })
}

const recuCarrito = document.querySelectorAll('.recupero')
agregarAlCarrito.forEach(recuCarritoBtn => {
    recuCarritoBtn.addEventListener('click', recuperoCarrito);
});

boton = document.querySelectorAll('.recupero')

