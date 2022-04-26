// Declare uam variável de nome `weight`.
{
let weight
}

// Que tipo de dado é a variável acima?
{
console.log(typeof weigth)
}

/* Declare uma variável e atribua valores para cada um dos dados:

    *name: string
    *age: number (integer)
    *stars: number (float)
    *isSubscribed: Boolean
*/
{
    let name = `Maykel`
    let age = 27
    let stars = 8.9
    let isSubscribed = true
}

// Declare uma variável `student` e atribua a ela as mesmas propriedades e valores do exercício anterior.
{
    let student = {
        name: `Maykel`,
        age: 27,
        stars: 8.9,
        isSubscribed: true,
    }
}

/* Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weigth> kg.
    Atenção, substitua <name> <age> <weigth> pelos valores de cada propriedade do objeto.
*/
{
    let student = {
        name: `Maykel`,
        age: 27,
        weight: 8.9,
    }
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
}

// Declare uma variável do tipo Array, de nome students e atribua a ela nenhum vaor, ou seja, somente o Array vazio.
{
    let students = [

    ]
    console.log(students)
}