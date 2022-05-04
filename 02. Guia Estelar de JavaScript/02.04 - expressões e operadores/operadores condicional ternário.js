
// Café da manhã
{
    let pao = true
    let queijo = true

    const bomCafe = pao && queijo ? `Café maravilhoso!` : `Não gostei dete café.`

    console.log(bomCafe) // o resultado é `Café maravilhoso!`
}
{
    let pao = true
    let queijo = false

    const bomCafe = pao && queijo ? `Café maravilhoso!` : `Não gostei deste café.`

    console.log(bomCafe) // o resultado é `Não gostei deste café.`
}
{
    let pao = false
    let queijo = false

    const bomCafe = pao && queijo ? `Café maravilhoso!` : `Não gostei deste café.`

    console.log(bomCafe) // o resultado é `Não gostei deste café.`
}

// Maior de 18 anos
{
    let age = 18

    const podeDirigir = age >= 18 ? `Você pode dirigir. Parabéns!` : `Infelizmente você não pode dirigir.`

    console.log(podeDirigir) // o resultado é `Você pode dirigir. Parabéns!`
}
{
    let age = 85

    const podeDirigir = age >= 18 ? `Você pode dirigir. Parabéns!` : `Infelizmente você não pode dirigir.`

    console.log(podeDirigir) // o resultado é `Você pode dirigir. Parabéns!`
}
{
    let age = 17

    const podeDirigir = age >= 18 ? `Você pode dirigir. Parabéns!` : `Infelizmente você não pode dirigir.`

    console.log(podeDirigir) // o resultado é `Infelizmente você não pode dirigir.`
}