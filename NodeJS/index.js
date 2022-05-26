const perguntas = [
    `O que aprendi hoje?`,
    `O que me deixou aborrecido? E o que eu poderia fazer para melhorar?`,
    `O que me deixou feliz hoje?`,
    `Quantas pessoas ajudei hoje?`,
]

const pergunte = (index = 0) => {
    return process.stdout.write(perguntas[index] + `\n\n\n`)
}

pergunte();

process.stdin.on(`data`, data => {
    process.stdout.write(data.toString().trim() + `\n`)
    process.exit()
})