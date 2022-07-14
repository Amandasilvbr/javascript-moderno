// SETINTERVAL JS MODERNO

// Executa o código um determinado número de vezes

setInterval(() => {
    console.log(`a`)
}, 2000)

// A cada 2 segundos, o código será executado, para parar:

let seconds = 0
let id = setInterval(() => {
    seconds = +2
    console.log(`a`)
    if (seconds >= 10) { clearInterval(id) }
}, 2000)

/* Com esse condicional, após 10 segundos o clear interval
 vai parar o setInterval
*/