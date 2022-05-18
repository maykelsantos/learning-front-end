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

// Manipulando conteúdo com `value`

{
    const element = document.querySelector(`input`);
    element.value = `Valor que eu quiser!`
}

// Manipulando elementos - atributos

{
    const header = document.querySelector(`header`);
    header.setAttribute(`id`, `header`) // adiciona um atributo
    const headerId = document.querySelector(`#header`);
    console.log(headerId).getAttribute(`id`); // pega o que contém no atributo
    header.removeAttribute(`id`); // remove um atributo
}

// Alterando estilos

{
    const element = document.querySelector(`body`);
    element.style.backgroundColor = "#f9f2A4"; // de alguma forma,não funcionou
}