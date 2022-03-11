// Changing the title
const titulo = document.querySelector('.tituloAN');

// Catching the ID of all the patients in HTML
const pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  // Catching the weight of the patient
  const tdPeso = paciente.querySelector(".info-peso");
  const peso = tdPeso.textContent;
  
  // Catching the height of the patient
  const tdAltura = paciente.querySelector(".info-altura");
  const altura = tdAltura.textContent;
  
  const resultadoIMC = paciente.querySelector(".info-imc");
  
  let pesoValido = true;
  let alturaValida = true;
  
  if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoValido = false;
    resultadoIMC.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
    // paciente.style.backgroundColor = "lightcoral";
  }
  
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida!");
    alturaValida = false;
    resultadoIMC.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }
  
  if (pesoValido && alturaValida) {
    const imc = peso / (altura * altura);
    resultadoIMC.textContent = imc.toFixed(2);
  }
}

const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();
  
  const form = document.querySelector("#form-adiciona");
  const nome = form.nome.value;
  const peso = form.peso.value;
  const altura = form.altura.value;
  const gordura = form.gordura.value;

  console.log(nome, peso, altura, gordura); // Imprime todos os valores
  // console.log(form.altura.value) // Imprime o input de altura quando clicado no botão, e o seu valor quando adicionado .value
})