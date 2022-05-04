
// operador lógico `AND` -> &&
{
    let pao = true
    let queijo = true

    console.log(pao && queijo) // o resultado é `true`
}
{
    let pao = true
    let queijo = false

    console.log(pao && queijo) // o resultado é `false`
}
{
    let pao = false
    let queijo = false

    console.log(pao && queijo) // o resultado é `false`
}

// operador lógico `OR` -> ||
{
    let pao = true
    let queijo = true

    console.log(pao || queijo) // o resultado é `true`
}
{
    let pao = true
    let queijo = false

    console.log(pao || queijo) // o resultado é `true`
}
{
    let pao = false
    let queijo = false

    console.log(pao || queijo) // o resultado é `false`
}

// operador lógico `NOT` -> !
{
    let pao = true
    let queijo = true

    console.log(!pao) // o resultado é `false`
    console.log(!queijo) // o resultado é `false`
}
{
    let pao = false
    let queijo = false

    console.log(!pao) // o resultado é `true`
    console.log(!queijo) // o resultado é `true`
}