import { fork } from 'child_process'
import path from 'path'
import { Router } from 'express'
import numbers from '../../scripts/calcularRandoms';

const randomsApiRouter = new Router();

randomsApiRouter.get('/api/randoms',async (req,res) => {
    req.params.cant();
    const calculadora = numbers();
    res.JSON(numbers)
})

export { calcular }