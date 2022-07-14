// EXPORTS E IMPORTS JS MODERNO

// Supondo que o seguinte código esteja em um arquivo chamado functions.js:
function sum(x, y) { return x + y };

function sub(x, y) { return x - y };

function mult(x, y) { return x * y };

function div(x, y) { return x / y };

const calc = { sum, sub, mult, div }


/* 
    Se quisermos utilizar em um outro arquivo, chamado aqui de use.js, existem 
algumas opções:
    1-Usar export default- apenas uma por arquivo;
    2-Usar export named- mais de uma por arquivo, se necessário.

    !! Antes de utilizar um dos dois, é importante atribuir um tipo "module" no script.
    Exemplo:
        <script type="module" src="/js/functions.js"></script>

*/

// No arquivo onde ocorre a exportação:

export {sum,sub,mult,div};

// No arquivo onde deve ocorrer a importação:

import {sum,sub,mult,div} from "/js/functions.js";

/* 
    Outro modo de fazer a exportação, principalmente de multiplas informações:

import * as mathFunctions from "/js/functions.js";

    O uso de * import tudo que foi exportado, e o acesso pode se dar da seguinte forma:

    mathFunctions.sum();

    !!É possível renomear as exportações e as importações para evitar conflitos de numenclatura.
    Exemplo:
    import { sum as funcSum } from "/js/functions.js";
    export { sum as funcSum };

*/