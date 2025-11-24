export const notFoundError = (req, res) => {
    return res.status(404).json({
        message: 'Rota não encontrada. Verifique a URL e tente novamente.',
    })
}