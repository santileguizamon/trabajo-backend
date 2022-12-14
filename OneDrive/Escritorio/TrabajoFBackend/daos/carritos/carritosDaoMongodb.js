import { Contenedor } from "./../../contenedor/contenedorMongo";

class CarritosDaoMemoria extends Contenedor {

    constructor(){
        super('carritos',{
            productos:{type: [],require: true},
            timestamp:{type: String, require: true}
        })
    }
}

export default CarritosDaoMemoria;