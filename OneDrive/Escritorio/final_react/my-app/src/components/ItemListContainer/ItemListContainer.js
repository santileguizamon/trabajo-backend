import {cartWidgets} from "../CartWidgets/CartWidgets";
import {NavBar} from "../NavBar/NavBar";
import {ItemList} from "../ItemList/ItemList";
import { useState,useEffect,} from "react";
import { getItems } from "./data";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"
import {db} from "../../utils/firebase";
import {doc,getDoc,query,collection,getDocs,where} from "firebase/firestore";



export const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams()
     
    const[items,setItems]= useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db,"items");
            const response = await getDocs(query);
            const productos = response.docs.map(doc=>{
                const newProd = {...doc.data(),id:doc.id}
            })
            return newProd
            
        } 
    });

   return(
   <>
   <h1>{greeting}</h1>
    {
        items.length > 0?(<ItemList items={items}/>):(<div>Cargando.....</div>)
        
    }
    
    </>
    )
    this.state.getData()
};

