import { Contenedor } from "./../../contenedor/contenedorMongo";

class CarritosDaoMemoria extends Contenedor {

    constructor(){
        super('produtcos',{
            title:{type: String , require: true},
            price:{type: Number , require: true},
            thumbnail:{type: String , require: true}
        })
    }
}

export default CarritosDaoMemoria;