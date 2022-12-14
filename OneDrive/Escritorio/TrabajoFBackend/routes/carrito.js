import  Express  from 'express';
import  ContenedorCarritos  from '../daos/carritos/carritosDaoMongodb';
import  ContenedorProductos  from '../daos/productos/productosDaoMongo';
const rutaCarrito = Express.router();

const contenedor = require ('../contenedor/contenedorMemoria'); 

const carritos = new ContenedorCarritos();
const productos = new ContenedorProductos ();


rutaCarrito.get('/',async(peticion,respuesta)=>{
    const listaCarrito = await carritos.getAll()
    respuesta.JSON(listaCarrito)
});

rutaCarrito.post('/',async(peticion,respuesta)=>{
    const carrito = {
        timestamp: Date.now(),
        productos: []
    }; 
    const suId = await carritos.save(carrito);
    respuesta.json(suId)
});

rutaCarrito.delete('/:id',async(peticion,respuesta)=>{
    const idCarrito = parseInt(peticion.params.id);
    await carritos.deleteById(idCarrito);
    respuesta.JSON({
        status: 'ok'
    })
});

rutaCarrito.get('/:id/productos',async(peticion,respuesta)=>{
    const idCarrito = parseInt(peticion.params.id);
    const listaProd = await carritos.getById(idCarrito)
    respuesta.JSON(listaProd.productos)
});

rutaCarrito.post('/:id/productos',async(peticion,respuesta)=>{
    const idCarrito = parseInt(peticion.params.id);
    const idProducto = peticion.body.idProducto;
    const producto = await productos.getById(idProducto);
    const carrito = await carritos.getById(idCarrito);
    carrito.productos.push(producto);
    await carritos.update(idCarrito,carrito)
    respuesta.JSON({
        status: 'ok'
    })
});

rutaCarrito.delete('/:id/productos/:id_prod',async(peticion,respuesta)=>{
    const idCarrito = parseInt(peticion.params.id);
    const idProducto = peticion.body.id_prod;
    const carrito = await carritos.getById(idCarrito);
    let indexDelete = -1;
    carrito.productos.forEach((producto,index) => {
        if(producto.id === idProducto){
            indexDelete = index;
        };
        if (indexDelete => 0){
            carrito.productos.splice(indexDelete,1)
        }
    });
    await carritos.update(idCarrito,carrito)
    respuesta.JSON({
        status: 'ok'
    })
});

export {rutaCarrito};