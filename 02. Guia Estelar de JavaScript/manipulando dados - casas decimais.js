{
    // transformar um número quebrado em um número com duas casa decimais e trocar o ponto por vírgula
    let number = 101.13251547
    number.toFixed(2).replace(`.`, `,`)

    // para mostrar na tela
    console.log(number.toFixed(2).replace(`.`, `,`))
}