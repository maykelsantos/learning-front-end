// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
    // C = (F - 32) * 5/9 
    // F = C * 9/5 + 32

{
    function transformacaoDeGraus(graus) {
        const existeC = graus.toUpperCase().include(`C`)
        const existeF = graus.toUpperCase().include(`F`)

        if(!existeC && !existeF) {
            console.log(`Grua não indentificado!`)
        }
    }
}