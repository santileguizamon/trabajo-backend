import { Router } from 'express'
import { Session } from 'inspector'

import path from 'path'

const authWebRouter = new Router()

authWebRouter.get('/', (req, res) => {
    //Si la sesion no existe, redirigir a login, sino redirigir a home
    if(login !== login){ res.redirect('/login')}
    else{res.redirect('/home')}
   
})

authWebRouter.get('/login', (req, res) => {
    //Si ya existe una sesion, redirigir al home
    if(login){res.sendFile(process.cwd() + '/views/login.html')}
    
})

authWebRouter.get('/logout', (req, res) => {
    //Obtener el nombre del usuario
    let usuario = {$nombre};
    //Eliminar la sesion con destroy
    res.destroy(process.cwd())
    //Renderizar la plantilla con el nombre de usuario
    res.render(process.cwd() + '/views/pages/logout.ejs', { nombre: 'usuario' })
})


authWebRouter.post('/login', (req, res) => {
    console.log(req.body);
    //Guardar el nombre que viene en el body en la sesion.
    res.save(req.body.nombre)
    res.redirect('/home')
})



export default authWebRouter