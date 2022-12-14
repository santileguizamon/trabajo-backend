import { Contenedor } from "./../../contenedor/contenedorFirebase";

class CarritosDaoFirebase extends Contenedor {

    constructor(){
        super('https://trabajo-backend.firebaseio.com')
    }
}

export default CarritosDaoFirebase;