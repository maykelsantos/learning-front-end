/*
O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos. Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ) e template literals ou template strings ( ), template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${ }, por exemplo: console.log(A soma de duas unidades é ${1+1}), já as outras não, por exemplo: console.log("Isso é um texto").
*/

console.log('Maykel') // aspas simples

console.log("Maykel") // aspas duplas

console.log(`
Maykel
`) // crases, com elas podemos quebrar as linhas

conlose.log(`Maykel ${1 + 1}`) // com crases podemos utilizar expressões de linguagens dentro da string (interpolação)