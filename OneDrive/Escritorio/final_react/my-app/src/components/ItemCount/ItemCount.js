import {useState} from 'react';

export const ItemCount = ({stock,initial,onAdd}) =>{
    const [contador,setContador] = useState (initial);
    const suma = () => {
       if ( contador < stock + 1 )
       {setContador (contador+ 1)}
    };
    const resta = () => {
        if( contador > initial - 1 )
        {setContador(contador-1)}
    };
    const confirmar = ()=>{
        if (contador > 0)
           { onAdd(contador)}
        else {console.log('No hay mas stock')}
    }
    return(
        <>
        <div>
            <button onClick={suma}> + </button>
            <button onClick={resta}> -</button>
            <button onClick={()=>{confirmar(contador)}}> agregar al carrito </button>
        </div>
        </>
    );
};

