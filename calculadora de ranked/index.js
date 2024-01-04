import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a quantidade de vitórias: ', (qtVitoriasStr) => {
    rl.question('Informe a quantidade de derrotas: ', (qtDerrotasStr) => {
        const qtVitorias = parseInt(qtVitoriasStr, 10);
        const qtDerrotas = parseInt(qtDerrotasStr, 10);

        const saldoVitorias = qtVitorias - qtDerrotas;

        function rankeds(qtVitorias, qtDerrotas, saldoVitorias) {
            if (qtVitorias < 10) {
                return `O Herói tem saldo de ${saldoVitorias} vitorias e está no nível de Ferro`;
            } else if (qtVitorias >= 10 && qtVitorias < 20) {
                return `O Herói tem saldo de ${saldoVitorias} vitorias e está no nível de Bronze`;
            } else if (qtVitorias >= 20 && qtVitorias < 50) {
                return `O Herói tem saldo de ${saldoVitorias} vitorias e está no nível de Prata`;
            } else if (qtVitorias >= 50 && qtVitorias < 80) {
                return `O Herói tem saldo de ${saldoVitorias} vitorias e está no nível de Ouro`;
            } else if (qtVitorias >= 80 && qtVitorias < 90) {
                return `O Herói tem saldo de ${saldoVitorias} vitorias  e está no nível de Diamante`;
            } else if (qtVitorias >= 90 && qtVitorias < 100) {
                return `O Herói tem saldo de ${saldoVitorias} vitorias  e está no nível de Lendário`;
            } else if (qtVitorias >= 100) {
                return `O Herói tem saldo de ${saldoVitorias} vitorias e está no nível de Imortal`;
            }
        }

        console.log(rankeds(qtVitorias, qtDerrotas, saldoVitorias));
        rl.close();
    });
});
