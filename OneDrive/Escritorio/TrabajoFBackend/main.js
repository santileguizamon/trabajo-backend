const express = require('express');
const app = express();
const { initializeApp } = require('firebase-admin/app');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const Contenedor = require('./contenedor/contenedorSql');
const options = require('../options');
const script = require('../script');
const { Socket } = require('dgram');

import { rutaCarrito } from './routes/carrito';
import {rutaProductos} from './routes/productos'

app.use('./routes/carrito',rutaCarrito);
app.use('./routes/productos',rutaProductos);

const PORT = 8080;
const publicRoot = './public';

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const conexionServidor = httpServer.listen(PORT,() =>{
    console.log(`Se esta escuchando en el puerto: ${conexionServidor.address().port}`)
});
servidor.on('error', error => console.log(`Error: ${error}`));

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static(publicRoot));

const productos = new Contenedor();
const newChat = new Contenedor();

app.get('/',(peticion,respuesta) =>{
    respuesta.send('index.html',{root: publicRoot})
})

io.on('connection', async (socket)=>{
    console.log('nuevo cliente conectado')
})

const listaProd = await productos.getAll();
socket.emit('nueva-conexion',listaProd);

socket.on('new-prod',(data)=>{
    productos.save(data);
    io.sockets.emit('producto', data)
})
//mensajes

const msg = await newChat.getAll();
Socket.emit('send-messege',msg)

Socket.on('newMessege',async(data)=>{
    await newChat.save(data);
    const msg = await newChat.getAll();
    io.sockets.emit('send-messege',msg)
});

Socket.on('disconected',()=>{
    console.log('Usuario desconectado')
});

const existMsg = existMsg;
const exist = exist;

import {exist} from '../script'
import {existMsg} from '../script'