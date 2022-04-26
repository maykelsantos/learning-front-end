{
    let word = `paralelepipedo`
    console.log(word.length) // mostrará na tela o número `14` que significa a quantidade de caracteres que a palavra contém

    let number = 1234
    console.log(number.length) // o resultado desta expressão é `undenfined` pois o números não recebe a função `length`

    console.log(String(number).length) // esta é a expressão correta para contar caracteres de um número, devemos primeiramente transforma-lo em uma string
}