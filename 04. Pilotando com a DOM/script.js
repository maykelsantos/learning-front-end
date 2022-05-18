// getElementById (element)
// getElementByClassName (HTMLCollection)
// getElementByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (Nodelist)

// Manipulando conteúdo com `textContent`

{
    const element = document.querySelector(`.text1`);

    element.textContent = `Olá Devs!`
}

// Manipulando conteúdo com `innerText`

{
    const element = document.querySelector(`.text2`);
    element.innerText = `Eaê brothers!`
}

// Manipulando conteúdos com `innerHTML`

{
    const element = document.querySelector(`.text3`);
    element.innerHTML = `Fala manos! <p>Teste</p>`
}