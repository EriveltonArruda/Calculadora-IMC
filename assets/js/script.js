let resetar = document.querySelector("#reset");

function cleanInputs() {
  height.value = "";
  weight.value = "";
}

resetar.addEventListener("click", (e) => {
  e.preventDefault();
  cleanInputs();
})

// Espera o formulário ser enviado
document.getElementById('imcForm').addEventListener('submit', function (e) {
  // Evita que a página seja recarregada ao enviar o formulário
  e.preventDefault();

  // Selecionando Elementos
  let height = document.querySelector('#altura').value;
  let weight = document.querySelector('#peso').value;
  let status = document.querySelector(".result");
  let show = document.querySelector(".result-container");
  let resultadoP = document.querySelector(".resultado");
  let newP = document.createElement("p");



  // Esconde ou mostra a tabela
  show.classList.toggle("hide")

  // Calcula o IMC
  let bmi = weight / (height * height);

  // Exibe o resultado com duas casas decimais
  document.querySelector('.result').textContent = bmi.toFixed(2);

  // Classificação do IMC
  let classificacao = "";
  // let mensagemMotivacional = ""
  if (bmi < 18.5) {
    classificacao = "Abaixo do peso";
    status.style.color = "red";
    newP.innerText = "Você está abaixo do peso. Uma alimentação equilibrada pode ajudar a melhorar sua saúde!";
    resultadoP.appendChild(newP);
  } else if (bmi >= 18.5 && bmi < 24.9) {
    classificacao = "Peso normal";
    status.style.color = "green";
    newP.innerText = "Parabéns! Você está com o peso ideal. Continue com um estilo de vida saudável!";
    resultadoP.appendChild(newP);
  } else if (bmi >= 25 && bmi < 29.9) {
    classificacao = "Sobrepeso";
    status.style.color = "orange";
    newP.innerText = "Cuidado! Você está com sobrepeso. Um pouco de atividade física pode fazer a diferença.";
    resultadoP.appendChild(newP);
  } else if (bmi >= 30 && bmi < 34.9) {
    classificacao = "Obesidade grau I";
    status.style.color = "red";
    newP.innerText = "Você está com obesidade grau I. Pequenos ajustes na alimentação e no exercício podem ajudar!";
    resultadoP.appendChild(newP);
  } else if (bmi >= 35 && bmi < 39.9) {
    classificacao = "Obesidade grau II";
    status.style.color = "red";
    newP.innerText = "Você está com obesidade grau II. Procure orientação médica para alcançar um peso mais saudável.";
    resultadoP.appendChild(newP);
  } else {
    classificacao = "Obesidade grau III";
    status.style.color = "red";
    newP.innerText = "Você está com obesidade grau III. É importante procurar ajuda profissional para melhorar sua saúde.";
    resultadoP.appendChild(newP);
  }

  // Atualiza o resultado na interface
  document.querySelector('.result').textContent = `${ bmi.toFixed(2) } (${ classificacao }) `;
});