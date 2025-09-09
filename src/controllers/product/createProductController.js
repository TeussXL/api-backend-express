import { create } from '../../models/productModel.js'

export const createProductController = async (req, res) => {

  const product = req.body

  const dados = await create(product)
  res.json({
    message: 'Produto criado com sucesso!',
    product: dados
  })
}
