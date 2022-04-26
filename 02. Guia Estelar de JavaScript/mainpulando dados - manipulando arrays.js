{
    let tecnologias = [`html`, `css`, `js`]

    // adicionar item no fim
    {
        let tecnologias = [`html`, `css`, `js`]
        tecnologias.push(`nodejs`)
        console.log(tecnologias)
    }
    // adicionar item no começo
    {
        let tecnologias = [`html`, `css`, `js`]
        tecnologias.unshift(`sql`)
        console.log(tecnologias)
    }
    // remover item no fim
    {
        let tecnologias = [`html`, `css`, `js`]
        tecnologias.pop()
        console.log(tecnologias)
    }
    // remover item no começo
    {
        let tecnologias = [`html`, `css`, `js`]
        tecnologias.shift()
        console.log(tecnologias)
    }
    // pegar somente alguns elementos do array
    {
        let tecnologias = [`html`, `css`, `js`]
        tecnologias.slice(1, 3)
        console.log(tecnologias)
    }
    // remover 1 ou mais itens em qualquer posição no array
    {
        let tecnologias = [`html`, `css`, `js`]
        tecnologias.splice(1, 2)
        console.log(tecnologias)
    }
    // encontrar a posição de um elemento no array
    {
        let tecnologias = [`html`, `css`, `js`]
        let index = tecnologias.indexOf(`css`)
        tecnologias.splice(index, 1)
    }
}