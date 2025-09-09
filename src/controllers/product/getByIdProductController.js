import { getById } from "../../models/profileModel.js"

export const getByIdProductController = async (req, res) => {
  const id = req.params.id

  const result = await getById(+id)
  res.json({
    message: `Produto com ID ${id} consultado com sucesso!`,
    product: result
  })
}