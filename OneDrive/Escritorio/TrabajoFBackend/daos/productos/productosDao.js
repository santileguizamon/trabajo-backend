import { Contenedor } from "./../../contenedor/contenedorMemoria";

class ProductosDao extends Contenedor {

    constructor(){
        super('../db/productos.txt')
    }
}

export default ProductosDao;