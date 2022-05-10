{
    for(let i = 0; i < 10; i++) {
        console.log(i)
    }
}
{
    for(let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
{
    for(let i = 10; i > 0; i--) {
        console.log(i)
    }
}
{
    for(let i = 10; i > 0; i--) {
        if(i === 5) {
            break; // break, para a execução do loop
        }
        console.log(i)
    }
}
{
    for(let i = 10; i > 0; i--) {
        if(i === 5) {
            continue; // continue, a execução do momento
        }
        console.log(i)
    }
}