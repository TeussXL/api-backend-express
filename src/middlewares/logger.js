export const logger = (req, res, next) => {
// mostar data time de sao paulo
console.log(`${req.method} ${req.url} - ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`)
next()
}