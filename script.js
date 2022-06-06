var numeroSecreto = parseInt(Math.random() * 11);

var tentativas = 4;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var dica = document.getElementById("dica");
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas <= 0) {
    elementoResultado.innerHTML = "Acabaram as tentativas";
    dica.innerHTML = "";
    return;
  }

  if (chute === numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
    dica.innerHTML = "";
    return;
  } else if (chute > 10) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else if (chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else {
    tentativas--;

    if (chute > numeroSecreto) {
      dica.innerHTML = "Dica: o número secreto é menor";
    }

    if (chute < numeroSecreto) {
      dica.innerHTML = "Dica: o número secreto é maior";
    }

    elementoResultado.innerHTML =
      "Você errou, agora restam " + tentativas + " tentativas.";
  }
}

// Obs.: Ele manteve o sorteio do número porque o "parseInt(Math.random() * 11)" está FORA DA FUNÇÃO

// Obs2.: parseInt(Math.random() * 11) ---> o computador vai sortear um número aleatório de 0 a 10 (inteiro)
