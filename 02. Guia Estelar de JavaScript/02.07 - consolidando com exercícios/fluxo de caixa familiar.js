    // Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    // * receitas: [] 
    // * despesas: []
    // Agora, crie uma função que irá calcular o total de receitas e 
    // despesas e irá mostrar uma mensagem se a família está com 
    // saldo positivo ou negativo, seguido do valor do saldo.

{
    let familia = {
        receitas: [2600, 350],
        despesas: [500, 100]
    }

    function soma(array) {
        let total = 0;

        for(let valor of array) {
            total += valor
        }

        return total;
    }

    function resultadoLiquido() {
        const calculoDasReceitas = soma(familia.receitas)
        const calculoDasDespesas = soma(familia.despesas)

        const resultado = calculoDasReceitas - calculoDasDespesas    

        if (resultado >= 0) {
            console.log(`O saldo financeiro de sua família é POSITIVO.`)
            console.log(`Seu saldo é de R$${resultado.toFixed(2)}`)
        } else {
            console.log(`O saldo financeiro de sua família é NEGATIVO.`)
            console.log(`Seu saldo é de R$${resultado.toFixed(2)}`)
        }
    }

    resultadoLiquido()
}

{
    let familia = {
        receitas: [2600, 350],
        despesas: [500, 100, 1000, 3500]
    }

    function soma(array) {
        let total = 0;

        for(let valor of array) {
            total += valor
        }

        return total;
    }

    function resultadoLiquido() {
        const calculoDasReceitas = soma(familia.receitas)
        const calculoDasDespesas = soma(familia.despesas)

        const resultado = calculoDasReceitas - calculoDasDespesas    

        if (resultado >= 0) {
            console.log(`O saldo financeiro de sua família é POSITIVO.`)
            console.log(`Seu saldo é de R$${resultado.toFixed(2)}`)
        } else {
            console.log(`O saldo financeiro de sua família é NEGATIVO.`)
            console.log(`Seu saldo é de R$${resultado.toFixed(2)}`)
        }
    }

    resultadoLiquido()
}