import express from 'express' // Importando o módulo express
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'

const app = express() // Criando uma instância do express
const port = 3000 // Definindo a porta do servidor

app.use(express.json()) // Converter o JSON que chegou na requesição em um objeto JS 

app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)

app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`)
})