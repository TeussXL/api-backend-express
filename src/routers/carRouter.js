import express from 'express'

const router = express.Router()

router.post('/:id', (req, res) => {
const dados = req.body
const id = req.params.id
const marca = dados.marca
const modelo = dados.modelo
res.json({
message: `${dados.marca} ${dados.modelo} com id ${id} alterado`,
marca: marca,
modelo: dados.modelo,
})
})

export default router