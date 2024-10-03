// Espera o formulário ser enviado
document.getElementById('imcForm').addEventListener('submit', function (e) {
  // Evita que a página seja recarregada ao enviar o formulário
  e.preventDefault();

  // Selecionando Elementos
  let height = document.querySelector('#altura').value;
  let weight = document.querySelector('#peso').value;
  let status = document.querySelector(".result");
  let show = document.querySelector(".result-container");
  let msg = document.createElement("p");


  // Esconde ou mostra a tabela
  show.classList.toggle("hide")

  // Calcula o IMC
  let bmi = weight / (height * height);

  // Exibe o resultado com duas casas decimais
  document.querySelector('.result').textContent = bmi.toFixed(2);

  // Classificação do IMC
  let classificacao = "";
  let mensagemMotivacional = ""
  if (bmi < 18.5) {
    classificacao = "Abaixo do peso";
    status.style.color = "red";
    mensagemMotivacional = "Aconselho que coma um pouco mais";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    classificacao = "Peso normal";
    status.style.color = "green";
    mensagemMotivacional = "Parabéns, continue assim!";
  } else if (bmi >= 25 && bmi < 29.9) {
    classificacao = "Sobrepeso";
    status.style.color = "orange";
    mensagemMotivacional = "Melhore sua alimentação, você consegue!";
  } else if (bmi >= 30 && bmi < 34.9) {
    classificacao = "Obesidade grau I";
    status.style.color = "red";
    mensagemMotivacional = "Cuidado, você está propenso a ter diabetes e hipertensão";
  } else if (bmi >= 35 && bmi < 39.9) {
    classificacao = "Obesidade grau II";
    status.style.color = "red";
    mensagemMotivacional = "Cuidado, Sua família precisa de você, se cuide";
  } else {
    classificacao = "Obesidade grau III";
    status.style.color = "red";
    mensagemMotivacional = "Bariátrica, AGORA!";
  }

  // Atualiza o resultado na interface
  document.querySelector('.result').textContent = `${ bmi.toFixed(2) } (${ classificacao }) ${ mensagemMotivacional }`;
});