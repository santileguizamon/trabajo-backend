import * as fs from 'fs';

export class Contenedor {
    constructor(productos) { this.productos = productos; }

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
    async getById(id) {
        const archivo= await fs.promises.readFile(this.productos,'utf8');
        const archivoParseado= JSON.stringify(archivo);
        let objetoSelect = null;
        archivoParseado.forEach(element => {
            if (element.id == id) {
                objetoSelect = element;
            }
        })
        return objetoSelect
    };
    
    async getAll() {
        const archivo= await fs.promises.readFile(this.productos,'utf8');
        const archivoParseado= JSON.stringify(archivo);
        return archivoParseado;
    }
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
    async deleteAll() {
        const arregloVacio = [];
        await fs.promises.writeFile(this.nombre, JSON.stringify(arregloVacio, null, 2));
    }
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
}

