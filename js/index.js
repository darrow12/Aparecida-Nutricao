// const imc = peso / altura * (altura);
// const imc = (peso / altura) * altura;
// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);
// console.log(altura);
// console.log("Resultado do IMC do Paulo é: " + peso/altura*altura);
// console.log(imc);

// Catching the ID of the first patient
const paciente = document.querySelector("#primeiro-paciente");

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
}

if (altura <= 0 || altura >= 3.0) {
  console.log("Altura inválida!");
  alturaValida = false;
  resultadoIMC.textContent = "Altura inválida!";
}

if (pesoValido && alturaValida) {
  const imc = peso / (altura * altura);
  resultadoIMC.textContent = imc;
}

/* 
  ! Apenas para testar. 
  Spoiler: deu certo!

  function Peso() {
    peso <= 0 || peso >= 1000;
    console.log("Peso!");
    pesoValido = false;
    resultadoIMC.textContent = "Peso inválido";
  }

  Banana();
*/
