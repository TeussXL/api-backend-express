import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
const dados = req.body
res.json({
message: 'Fornecedor criado com sucesso',
profile: dados
})
})

router.get('/', (req, res) => {
res.json({ message: 'Fornecedores retornado com sucesso' })
})

router.get('/:id', (req, res) => {
const id = req.params.id
res.json({
message: `Fornecedor com ID ${id} retornado com sucesso`
})
})

router.put('/', (req, res) => {
const dados = req.body
res.json({
message: 'Fornecedor atualizado com sucesso',
profile: dados
})
})

router.put('/:id', (req, res) => {
const id = req.params.id
const dados = req.body
res.json({
message: `Fornecedor com ID ${id} atualizado com sucesso`,
profile: dados
})
})

router.delete('/', (req, res) => {
res.json({ message: 'Forcededor deletado com sucesso' })
})

export default router