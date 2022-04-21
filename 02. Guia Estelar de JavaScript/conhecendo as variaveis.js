// Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

// var
var clima = `Quente`
console.log(clima) // escreve no terminal `Quente`
clima = `Frio`
console.log(clima) // escreve no terminal `Frio`

//let
let clima = `Quente`
console.log(clima) // escreve no terminal `Quente`
clima = `Frio`
console.log(clima) // escreve no terminal `Frio`

//const - não pode mudar a variável
const clima = `Quente`
console.log(clima) // escreve no terminal `Quente`
clima = `Frio`
console.log(clima) // esse script dá erro, pois não pode atribuir outro valor a uma variável constante
