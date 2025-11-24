import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import customerRouter from './routers/customerRouter.js'
import carRouter from './routers/carRouter.js'
import cors from 'cors'
import { logger } from './middlewares/logger.js'
import authRouter from './routers/authRouter.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { notFoundError } from './controllers/notFoundError.js'

const app = express()
const port = 3333

app.use(logger)
app.use(cors()) // Habilitar o CORS para todas as rotas e todos os domínios 
app.use(express.json()) // Converter o JSON que chegou na requisição em um objeto js e vai salvar em req.body

app.use('/auth', authRouter)
app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/customer', customerRouter)
app.use('/car', carRouter)

app.use(errorHandler)
app.use(notFoundError)

app.listen(port, () => {
  console.log(`API Rodando em http://localhost:${port}`)  
})