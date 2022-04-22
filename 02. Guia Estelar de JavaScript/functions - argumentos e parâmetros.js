{
    // function expression
    // function anonymous
    const sum = function(number1, number2) {
        console.log(number1 + number2)
    }

    sum(2, 3) // arguments - argumentos
}

// retornando valores dentro da função (function)
{
    const sum = function (num1, num2) {
        let total = num1 + num2
        return total
    }

    let num1 = 10
    let num2 = 5
    
    console.log(`O número 1 é ${num1}`)
    console.log(`O número 2 é ${num2}`)
    console.log(`A soma é ${sum(num1, num2)}`)
}

// Outra maneira de aprender function
{
    function fazerSuco(fruta1, fruta2) {
        return fruta1 + fruta2
    }
    const copo = fazerSuco(`Banana`, `Maça`)
    console.log(copo)
}