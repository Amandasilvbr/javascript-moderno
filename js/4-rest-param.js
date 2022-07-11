// REST PARAM JS MODERNO

function welcome(message, ...names) {
    names.forEach(name => console.log(`${message}, ${name}`));
}

welcome("Seja bem-vindo","Arthur","Joana","Melissa")

/* Em resumo, o rest param atribui ao segundo paramêtro tudo que foi enviado e sobrou.
Nesse caso, message recebe "Seja bem-vindo", e ...names recebe primeiramente Arthur, depois
o resto dos paramêtros que aparecem a seguir: Joana e Melissa */