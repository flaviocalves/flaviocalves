function calculadora() {
    const operacao = Number(prompt(
        'Escolha uma operação:\n' +
        '1 - Soma (+)\n' +
        '2 - Subtração (-)\n' +
        '3 - Multiplicação (*)\n' +
        '4 - Divisão Real (/)\n' +
        '5 - Divisão Inteira (%)\n' +
        '6 - Potenciação (**)'
    ));
    if (isNaN(operacao) || operacao < 1 || operacao > 6) {
        alert('Erro - Operação Inválida');
        calculadora();
    } else {
        const n1 = Number(prompt('Insira o primeiro valor:'));
        const n2 = Number(prompt('Insira o segundo valor:'));
        if (isNaN(n1) || isNaN(n2)) {
            alert('Erro - Parâmetros Inválidos');
            calculadora();
        } else {
            let resultado;
            function novaOperacao() {
                const opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opcao === '1') {
                    calculadora();
                } else if (opcao === '2') {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida');
                    novaOperacao();
                }
            }
            function realizarOperacao(operacaoFn, simbolo) {
                resultado = operacaoFn(n1, n2);
                alert(`${n1} ${simbolo} ${n2} = ${resultado}`);
                novaOperacao();
            }
            if (operacao === 1) {
                realizarOperacao((a, b) => a + b, '+');
            } else if (operacao === 2) {
                realizarOperacao((a, b) => a - b, '-');
            } else if (operacao === 3) {
                realizarOperacao((a, b) => a * b, '*');
            } else if (operacao === 4) {
                realizarOperacao((a, b) => a / b, '/');
            } else if (operacao === 5) {
                realizarOperacao((a, b) => a % b, '%');
            } else if (operacao === 6) {
                realizarOperacao((a, b) => Math.pow(a, b), '**');
            } else {
                alert('Operação inválida');
            }
        }
    }
}
calculadora();
