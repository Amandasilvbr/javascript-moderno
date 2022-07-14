// PROMISE JS MODERNO

// Sem promisse
function sumNumbers() {
    let result = 1 + 1;
    result === 2 ? sucessCallback() : errorCallback();
}

function sucessCallback() { console.log(`Soma igual a 2!`) };
function errorCallback() { console.log(`Ops! Algo deu errado!`) };

sumNumbers();

// Com promise
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    result === 2 ? resolve(`Sucess`) : reject(`Failed`);
})

p.then((message) => {
    console.log(`Quando funciona ${message}`)
}).catch((err)=>`Quando não funciona ${err}`)

/* 
    Em resumo, as promises são utilizadas de modo assíncrono para uma ação que vai ser executada no futuro. 
    O resultado pode ser:
    1-Sucesso;
    2-Erro;


    THEN: é usado para tratar os dados quando o resultado da promise é sucesso;
    CATCH: é usado para tratar os dados quando o resultado da promise é um erro.

    Além disso, as promises podem ser encadeadas, retornando mais de um then e mais de um catch.

*/