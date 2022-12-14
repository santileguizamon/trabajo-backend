import { Contenedor } from "./../../contenedor/contenedor";

class CarritosDao extends Contenedor{

    constructor(){
        super('./../../db/carritos.txt')
    }
    async save(objeto) {
        const archivo= await fs.promises.readFile(this.productos,'utf8');
        const archivoParseado= JSON.stringify(archivo);
         let id = 1;
         archivoParseado.forEach((element,index) =>{
             if(element.id >= id){
                 id=element.id +1
             }
         })
         objeto.id = id;
         archivoParseado.push(objeto);
         await fs.promises.writeFile(this.productos, JSON.stringify(archivoParseado,null,2))
         return id
     };
     async update(id,objeto) {
        const archivo= await fs.promises.readFile(this.productos,'utf8');
        const archivoParseado= JSON.stringify(archivo);
         let id = -1;
         archivoParseado.forEach((element,index) =>{
             if(producto.id == id){
                 pocision=indice
             }
         })
         objeto.id = id;
         if(posicion => 0){
             archivoParseado.push(objeto);
         await fs.promises.writeFile(this.productos, JSON.stringify(archivoParseado,null,2))
         return id
         }
        
     };
     async deleteById(id) {
        const archivo= await fs.promises.readFile(this.productos,'utf8');
        const archivoParseado= JSON.stringify(archivo);
        let indexSelect = -1;
        archivoParseado.forEach((element, index) => {
            if (element.id == id) {
                indexSelect = index;
            }
        });
        if (indexSelect != -1) {
            archivoParseado.splice(indexSelect, 1);
            await fs.promises.writeFile(this.productos, JSON.stringify(archivoParseado,null,2))
        }
    }
}

export default CarritosDao;