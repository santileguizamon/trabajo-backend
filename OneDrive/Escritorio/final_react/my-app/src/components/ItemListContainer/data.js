import { useState } from "react";



export const data =[
    {
        id: 1,
        item: 'remera',
        description:'descripcion item',
        price: '$3500',
        stock: 10
    },
    {
        id: 2,
        item: 'jogger',
        description:'descripcion item',
        price: '$9500',
        stock: 10
    },
    {
        id: 3,
        item: 'jean',
        description:'descripcion item',
        price: '$14500',
        stock: 10
    },
    {
        id: 4,
        item: 'buzo',
        description:'descripcion item',
        price: '$10500',
        stock: 10
    },
    {
        id: 5,
        item: 'borcegos',
        description:'descripcion item',
        price: '$25000',
        stock: 10
    }
];

export const getItems = new Promise((resolve, reject) => {
    setTimeout (()=>{resolve(data)},2000)
}) 
export const getItem = (id) => {
    return new Promise ((resolve, reject) => {
            const buscador = data.find (el=>el.id==parseInt(id))
        })
    
}

export const category = (item) => {
    return new Promise((resolve, reject) => {
        const categoria = item.filter (item)
    })

}
