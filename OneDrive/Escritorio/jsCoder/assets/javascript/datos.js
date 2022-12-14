const producto=[{nombre: 'remera',precio: 1900, id:1},
{ nombre: 'buzo', precio: 9500, id:2},
{nombre: 'jogger', precio: 7500, id:3},
{nombre: 'jean', precio: 10000, id:4},];

class bocanegraEcomerce {
    constructor(jsonN,jsonP){
    this.arrayNombre = jsonN
    this.arrayPrecio = jsonP
    }
}

const itemsContainer= document.querySelector( '.itemsContainer')

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
       obtenerContenido(URL)      
    }, 1500);
 })