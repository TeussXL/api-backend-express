import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  const dados = req.body
  res.json({
    message: 'Perfil criado com sucesso',
    profile: dados
  })
})

//lista todos os profiles
router.post('/', (req, res) => {
const dados = req.body
res.json({
message: 'Perfil criado com sucesso',
profile: dados
})
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  const dados = req.body
res.json({ message: 'Perfil retornado com sucesso' })
})

router.put('/', (req, res) => {
const dados = req.body
res.json({
message: 'Perfil atualizado com sucesso',
profile: dados
})
})

router.delete('/', (req, res) => {
res.json({ message: 'Perfil deletado com sucesso' })
})

export default router