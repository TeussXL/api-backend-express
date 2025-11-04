import { create } from '../../models/profileModel.js';
import bcrypt from 'bcrypt';
export const createProfileController = async (req, res) => {
  const profile = req.body;

  profile.pass = await bcrypt.hash(profile.pass, 10);

  const dados = await create(profile);
  res.json({
    message: 'Profile criado com sucesso!',
    profile: dados
  })
}
