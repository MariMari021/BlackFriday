let posicao;
const dataAlvo = new Date('2023-11-27T00:00:00').getTime();

function calcularDiferenca() {
    const dataAtual = new Date().getTime();
    const diferenca = dataAlvo - dataAtual;

    // calcula a diferença em dias, horas, minutos e segundos
    const diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horasRestantes = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosRestantes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundosRestantes = Math.floor((diferenca % (1000 * 60)) / 1000);

    // se a diferença for menor ou igual a zero, chegamos à data alvo
    if (diferenca <= 0) {
        pausarContador();
        document.getElementById('contador').textContent = 'A Cyber Monday chegou!';
        document.getElementById('progresso').style.width = '0';
    } else {
        // exibe a contagem regressiva de dias, horas, minutos e segundos
        document.getElementById('contador').textContent = `${diasRestantes}d, ${horasRestantes}h, ${minutosRestantes}min, ${segundosRestantes}seg`;

        // calcula o progresso relativo
        const progressoRelativo = (diferenca / (1000 * 60 * 60 * 24 * 14)) * 100; // ajuste para uma semana

        // atualiza a barra de progresso
        document.getElementById('progresso').style.width = Math.max(100 - progressoRelativo, 0) + '%';
    }
}

function atualizarContador() {
    calcularDiferenca();
}

function iniciarContador() {
    posicao = setInterval(atualizarContador, 1000);
    calcularDiferenca();
}

function pausarContador() {
    clearInterval(posicao);
}

function reiniciarContador() {
    pausarContador();

    contador = 0;
    progresso = 0;
    document.getElementById('contador').textContent = contador;
    document.getElementById('progresso').style.width = '0';
    iniciarContador();
}

// inicia o contador assim que a página é carregada
window.onload = iniciarContador;