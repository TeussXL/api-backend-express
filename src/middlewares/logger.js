export const logger = (req, res, next) => {
// mostar data time de sao paulo bolsonaro de calcinha
console.log(`${req.method} ${req.url} - ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}`)
next()
}