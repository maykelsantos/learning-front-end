{
    function calculadora(numero1 , operador, numero2) {
        let resultado = 0;

        switch (operador) {
            case `+`:
                resultado = numero1 + numero2
                break;
            case `-`:
                resultado = numero1 - numero2
                break;
            case `*`:
                resultado = numero1 * numero2
                break;
            case `/`:
                resultado = numero1 / numero2
                break;
            default:
                console.log(`Não implementado.`)
                break;
        }

        return resultado
    }
    console.log(calculadora(4, `+`, 8)) // o resultado é `12`
    console.log(calculadora(4, `-`, 8)) // o resultado é `-4`
    console.log(calculadora(4, `*`, 8)) // o resultado é `32`
    console.log(calculadora(4, `/`, 8)) // o resultado é `0.5`
    console.log(calculadora(4, `%`, 8)) // o resultado é `Não implementado. 0`
}