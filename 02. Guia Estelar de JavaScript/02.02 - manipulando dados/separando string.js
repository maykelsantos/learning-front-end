{
    // separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array.
    // Depois disso, transforme o array em um texto e onde eram os espaços coloque `_`

    let frase = `Eu quero viver Jesus Cristo`
    let minhaArray = frase.split(` `) // split, separa o texto ou frase pelo delimitador identificado nas aspas colocando-os em arrays
    let fraseComUnderLine = minhaArray.join(`_`) // join, os arrays pelo delimitador identificado nas aspas
    console.log(fraseComUnderLine)
}