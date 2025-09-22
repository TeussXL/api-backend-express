import { create } from '../../models/profileModel.js';
export const createProfileController = async (req, res) => {
  const profile = req.body;
  const dados = await create(profile);
  res.json({
    message: 'Profile criado com sucesso!',
    profile: dados
  })
}
