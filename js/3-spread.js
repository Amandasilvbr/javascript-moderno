// OPERADOR SPREAD JS MODERNO:

let spaceships = ["Colossus", "Ártemis", "Fênix"]
console.log(...spaceships)

// Os "..." expandem o array, cada elemento é considerado separadamente

function velocity(startVelocity, acceleration) {
    return startVelocity + acceleration
}

let carInfo = [40, 90]

console.log(velocity(...carInfo))

/* Nesse caso, a função recebe os paramêtros separadamente, por conta dos "...".
 Sem eles, seria necessário atribuir cada informação à uma variável separadamente 
 
 Sem o spread:
 
function velocity([40,90], undefined)

Com o spread:

function velocity(40, 90)

*/