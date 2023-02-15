import { Router } from 'express'
import { webAuth } from '../../auth/index.js'

import path from 'path'
import logger from 'pino';

const express = require('express');
const cluster = require('cluster');
const os = require('os');

const compression = require('compression');
app.use(compression());



const numProcesadores = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Nuevo master: ${process.pid} corriendo, con ${numProcesadores} workers`);
  
    for (let i = 0 ; i < numProcesadores ; i++) {
      cluster.fork(); // node server.js //modo-worker
    }
  
    cluster.on('exit', (worker) => {
      console.log(`El worker ${worker.process.pid} ha muerto`);
      cluster.fork(); // node server.js //modo-worker
    }); 
  
  } else {
    const app = express();
    const PORT = process.argv[2] || 8080;
    
    app.get('/', (req, res) => {
      res.send(`Servidor express en Puerto: ${PORT}, Workers: ${numProcesadores}, PID: ${process.pid} - ${(new Date()).toLocaleString()}`);
    }); 
    
    const servidor = app.listen(PORT, () => {
      console.log(`Worker en ${PORT}, PID: ${process.pid}`)
    });
  }
  

  //npm i -g pm2
//npm list -g | grep pm2

// -------------- MODO FORK -------------------
//pm2 start server.js --name="ServerX" --watch -- PORT
//pm2 start server.js --name="Server1" --watch -- 8081
//pm2 start server.js --name="Server2" --watch -- 8082

// -------------- MODO CLUSTER -------------------
//pm2 start server.js --name="ServerX" --watch -i max -- PORT
//pm2 start server.js --name="Server3" --watch -i max -- 8083
//pm2 start server.js --name="Server4" --watch -i max -- 8084




const productosWebRouter = new Router()

productosWebRouter.get('/', (req, res) => {
    res.redirect('/home')
})

productosWebRouter.get('/home', webAuth, (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/home.ejs'), {
        username: req.user.username,
        contador: req.user.contador
    })
})

productosWebRouter.get('/productos-vista-test', (req, res) => {
    res.sendFile(path.join(process.cwd(), '/views/productos-vista-test.html'))
})

productosWebRouter.get('/info',(req,res) => {
    res.render(path.join(process.cwd(),'/views/pages/info.ejs'),{specs:[{
        title:'Process id',
        value: process.pid,
        title:'Path',
        value: process.execPath.split('/info').pop(),
        title:'Carpeta del proyecto',
        value: process.cwd(),
        title:'Version node',
        value: process.installPrefix,
        title: 'Nombre de la plataforma',
        value: process.platform,
        title:'Memoria total reservada',
        value: process.memoryUsage()
    }]})
});



export default productosWebRouter