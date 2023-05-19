/*1 - Criar uma Api que recebe dois números via parametro de um formulário
    HTML e realiza: soma, multiplicação, subtração e divisão conforme solicitação do form
*/
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/operacao', (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const operacao = req.body.operacao;
    let resultado;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            resultado = num1 / num2;
            break;
        default:
            res.send('Operação inválida');
            return;
    }

    res.send(`O resultado da ${operacao} é ${resultado}`);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
