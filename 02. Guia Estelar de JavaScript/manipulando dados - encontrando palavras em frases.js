{
    let frase = `Eu quero viver Jesus Cristo`
    let encontrarPalavra1 = frase.includes(`jesus`) // resultado é `false` pois `includes` diferencia maiúsculas de minúsculas
    let encontrarPalavra2 = frase.includes(`Jesus`) // resultado é `true`

    // para mostrar na tela o `false` e o `true`
    console.log(encontrarPalavra1) // false
    console.log(encontrarPalavra2) // true
}