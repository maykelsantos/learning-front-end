// Está com febre?

{
    let temperatura = 36.5
    if(temperatura >= 37) {
        console.log(`Você está com febre.`)
    } else {
        console.log(`Você não está com febre.`)
    }
} // o resultado é `Você não está com febre.`
{
    let temperatura = 37.1
    if(temperatura >= 37) {
        console.log(`Você está com febre.`)
    } else {
        console.log(`Você não está com febre.`)
    }
} // o resultado é `Você está com febre.`
{
    let temperatura = 38
    if (temperatura >= 37.5) {
        console.log(`Você está com febre alta. Cuidado!`)
    } else if (temperatura >= 37 && temperatura < 37.5) {
        console.log(`Você está com febre moderada.`)
    } else {
        console.log(`Você não está com febre.`)
    }
} // o resultado é `Você está com febre alta. Cuidado!`
{
    let temperatura = 37.3
    if (temperatura >= 37.5) {
        console.log(`Você está com febre alta. Cuidado!`)
    } else if (temperatura >= 37 && temperatura < 37.5) {
        console.log(`Você está com febre moderada.`)
    } else {
        console.log(`Você não está com febre.`)
    }
} // o resultado é `Você está com febre moderada.`
{
    let temperatura = 36
    if (temperatura >= 37.5){
        console.log(`Você está comm febre alta. Cuidado!`)
    } else if (temperatura >= 37 && temperatura < 37.5) {
        console.log(`Você está com febre moderada.`)
    } else {
        console.log(`Você não está com febre.`)
    }
} // o resultado é `Você não está com febre.`