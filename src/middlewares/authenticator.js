import jwt from 'jsonwebtoken';

export const authenticator = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Não autorizado!' });
  } 
  const token = authHeader.split(' ')[1] // Bearer <token>

  if(token) {
    return res.status(401).json({ message: 'Não autorizado!' });
  }
  try {
    const payLoad = jwt.verify(token, process.env.JWT_SECRET);
    req.userLogged = payLoad;
    next();
  } catch (err) {
    console.error('Erro na autenticação do token:', err);
    return res.status(401).json({ message: 'Token Invalido!' });
  }
  next();
}