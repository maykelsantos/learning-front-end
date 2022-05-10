{
    let person = {
        name: `Maykel`,
        age: 27,
        weight: 80.08,
    }

    for(let propriedades in person) {
        console.log(propriedades)
        console.log(person[propriedades])
    }
}