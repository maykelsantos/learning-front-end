// arrow function

{
    const sayMyName = () => { // => significa `arrow function`
        console.log(`Maykel`)
    }
    sayMyName() // escreve `Maykel` no console
}

// callback function

{
    function sayMyName(name) {
        console.log(`Antes de executar a função callback`)
        name()
        console.log(`Depois de executar a função callback`)
    }
    sayMyName(
        () => {
            console.log(`Estou em uma callback`)
        }
    )
}