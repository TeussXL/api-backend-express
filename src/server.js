import express from 'express' // Importando o módulo express

const app = express() // Criando uma instância do express
const port = 3000 // Definindo a porta do servidor

app.use(express.json()) // Middleware para analisar JSON

// app.put('/user', (req, res) => {
// //pegar dados do usuário
// res.json({message: 'Usuario atualizado com sucesso' })
// })

app.post('/profile', (req, res) => {
const dados = req.body
res.json({
message: 'Perfil criado com sucesso',
profile: dados
})
})

app.get('/profile', (req, res) => {
res.json({ message: 'Perfil retornado com sucesso' })
})

app.put('/profile', (req, res) => {
const dados = req.body
res.json({
message: 'Perfil atualizado com sucesso',
profile: dados
})
})

app.delete('/profile', (req, res) => {
res.json({ message: 'Perfil deletado com sucesso' })
})


app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`)
})