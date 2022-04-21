// declarações separadas
let age = 18
let human = true

console.log(age)
console.log(human)

// agrupamento de declarações
{ // necessário criar um escopo para não interferir nas variáveis acima
let age, human
age = 21
human = false

console.log(age, human)
}