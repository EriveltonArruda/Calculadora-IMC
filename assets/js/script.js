// Selecionando Elementos
let heightEl = document.querySelector('#altura')
let weightEl = document.querySelector('#peso');
let statusEl = document.querySelector(".result");
let showHide = document.querySelector(".result-container");
let resultP = document.querySelector(".resultado");
let newP = document.createElement("p");
let form = document.querySelector('#imcForm');

// Funções
function bmiCalc() {
  // Esconde a tabela
  showHide.classList.remove("hide");

  // Convertendo CM para Metros
  if (heightEl.value > 3) {
    heightEl.value = Number(heightEl.value) / 100;
  }

  let bmi = Number(weightEl.value) / Number(heightEl.value) ** 2;

  // Eventos
  // Exibe o resultado com duas casas decimais
  document.querySelector('.result').textContent = bmi.toFixed(2);

  // Classificação do IMC
  let classificacao = "";
  // let mensagemMotivacional = ""
  if (bmi < 18.5) {
    classificacao = "Abaixo do peso";
    statusEl.style.color = "red";
    newP.innerText = "Você está abaixo do peso ideal. Que tal explorar opções de uma alimentação mais nutritiva para se sentir mais forte e saudável?";
    resultP.appendChild(newP);
  } else if (bmi >= 18.5 && bmi < 24.9) {
    classificacao = "Peso normal";
    statusEl.style.color = "green";
    newP.innerText = "Parabéns, você está com um peso saudável! Continue com seus bons hábitos.";
    resultP.appendChild(newP);
  } else if (bmi >= 25 && bmi < 29.9) {
    classificacao = "Sobrepeso";
    statusEl.style.color = "orange";
    newP.innerText = "Você está um pouco acima do peso. Pequenas mudanças em sua rotina podem trazer grandes benefícios para sua saúde e bem-estar.";
    resultP.appendChild(newP);
  } else if (bmi >= 30 && bmi < 34.9) {
    classificacao = "Obesidade grau I";
    statusEl.style.color = "red";
    newP.innerText = "Cuidar da sua saúde agora pode melhorar muito sua qualidade de vida no futuro.";
    resultP.appendChild(newP);
  } else if (bmi >= 35 && bmi < 39.9) {
    classificacao = "Obesidade grau II";
    statusEl.style.color = "red";
    newP.innerText = "É um bom momento para procurar apoio e adotar hábitos mais saudáveis.";
    resultP.appendChild(newP);
  } else {
    classificacao = "Obesidade grau III";
    statusEl.style.color = "red";
    newP.innerText = "Sua saúde merece atenção especial. Que tal buscar orientação para cuidar de você?";
    resultP.appendChild(newP);
  }

  // Atualiza o resultado na interface
  document.querySelector('.result').textContent = `${ bmi.toFixed(2) } (${ classificacao }) `;
}

// Espera o formulário ser enviado
form.addEventListener('submit', function (e) {
  // Evita que a página seja recarregada ao enviar o formulário
  e.preventDefault();
  bmiCalc();
});
