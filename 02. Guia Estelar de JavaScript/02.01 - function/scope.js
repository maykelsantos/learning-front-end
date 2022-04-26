// function scope

{
    let subject =`create video`

    function createThink(subject) {
        return subject
    }

    console.log(subject) // escreve no console `create video`
    console.log(createThink(subject)) // escreve no console `create video`
}

{
    let subject = `create video`

    function createThink(subject) {
        subject = `study`
        return subject
    }

    console.log(subject)
    console.log(createThink(subject))
}