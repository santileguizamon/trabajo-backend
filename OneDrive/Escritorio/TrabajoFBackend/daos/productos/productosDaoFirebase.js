import { Contenedor } from "./../../contenedor/contenedorFirebase";

class ProductosDaoFirebase extends Contenedor {

    constructor(){
        super('https://trabajo-backend.firebaseio.com')
    }
    
}

export default ProductosDaoFirebase;