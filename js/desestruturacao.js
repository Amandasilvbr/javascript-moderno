// DESESTRUTURAÇÃO JS MODERNO: objetos e arrays

// 1-OBJETOS:
let bus = {
    people: 10,
    name: "Star bus",
    isBreak: false
}

/* sem desestruturação
let busName= bus.name;
let howManyPeople= bus.people;

 console.log(busName,howManyPeople) */

//  com desestruturação:
let { name: busName, people: howManyPeople } = bus
console.log(busName, howManyPeople)

// 2-ARRAYS:
let spaceships = ["Colossus", "Ártemis", "Fênix"]

/*  sem desestruturação
let colossus= spaceships[0]
let artemis= spaceships[1]

 console.log(colossus,artemis) */

//  com desestruturação:
let [colossus,artemis]=spaceships
console.log(colossus,artemis)
