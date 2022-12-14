import {Item} from "./Item/Item";

export const ItemList = ({ items }) => {

    return (
        <>
            {items.map((productos) => (
                
                    <Item
                    key={productos.id} 
                    {...productos}
                     />
                
            ))}
        </>
    )
}

