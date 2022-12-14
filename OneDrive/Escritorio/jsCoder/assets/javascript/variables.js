let carrito=[];
let total=[];

const URL = `js/productos.json`

function buscarProducto (){
    let resultado = producto.find((producto)=> producto.nombre.includes(buscar))
    if (resultado !== undefined) {
        console.clear()
        console.table(resultado) 
    }
    calcularPrecio(resultado)
}

const agregarAlCarrito = document.querySelectorAll('.cardsBtn')
agregarAlCarrito.forEach(agregarAlCarritoBtn =>{
    agregarAlCarritoBtn.addEventListener('click',clickAgregarCarrito);
} );

boton = document.querySelectorAll('.cardsBtn')

function clickAgregarCarrito(event){
    let id = event.target.id
    let filtro = producto.filter(elm => elm.id == id)
    filtro.forEach(elm => {
        carrito.push(elm)
        calcularPrecio(elm)
    })
    guardarCompras()
    agregarItem();
}

function agregarItem(carritos) {
    carritoContainer.innerHTML = ".cardsBtn"
    carrito.forEach(elm =>{
        carritoContainer.innerHTML += `
        <ul>
            <li>${producto.nombre} - ${producto.precio}</li>
        </ul>
        `
    })
}



function calcularPrecio(producto) {
    const precioConIva=producto[0].precio * 1.21;
    let calcularCarrito = precioConIva;
    console.log('Precio final'+""+ precioConIva)
}

function calcularCarrito(){
    total.push(precioConIva)
    console.log(carrito)
    let final = total.reduce((a, b) => a + b, 0)
    carritoTotal.innerHTML = `<p> Total a pagar mas 21%: ${final}</p>`
}

function guardarCompras(){
    carrito.length > 0 && localStorage.setItem('productosCarrito',JSON.stringify(carrito))
}

function recuperoCarrito(){
    let miCarrito = JSON.parse(localStorage.getItem('productosCarrito')) || []
    agregarItem(miCarrito)
}

const confirmarCarrito = () => {
   guardarCompras() ? alert ('Desea seguir comprando?'):('Seleccione mas productos');
} 

let confirmCompras = () => {
    Swal.fire({
        title: confirmarCarrito,
        icon:'question',
        showConfirmButton: false,
        showDenyButton: true,
    })
}
const cardContenido = (contenido)=> {
           
    const {nombre, precio, categoria, } = contenido
              return `<div class="col s12 m6 l3">
                          <div class="card z-depth-2">
                              <div class="card-image">
                                 <img loading="lazy" src="" title="${nombre}">
                              </div>
                              <div class="card-content black">
                                 <p class="yellow-text">Precio: <span class="white-text">${precio}</span></p>
                              </div>
                          </div>
                      </div>`
}       
 

const obtenerContenido = (URL)=> {
    fetch("/productos.json")

    .then((response)=> response.json(producto) )

    .then( (data)=> {

       data.forEach( (contenido)=> {

        itemsContainer.innerHTML += cardContenido(contenido)

       })

    })    
};

