const titulo = document.querySelector(".tituloAN");
titulo.textContent = "Banana";

// Catching the ID of the first patient
const paciente = document.querySelector("#primeiro-paciente")

// Catching the weight of the patient
const tdPeso = paciente.querySelector(".info-peso");
const peso = tdPeso.textContent;

// Catching the height of the patient
const tdAltura = paciente.querySelector(".info-altura");
const altura = tdAltura.textContent;

const imc = peso / (altura * altura);
// const imc = peso / altura * (altura);
// const imc = (peso / altura) * altura;

console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);
console.log(imc);
// console.log("Resultado do IMC do Paulo é: " + peso/altura*altura);

const resultadoIMC = document.querySelector(".info-imc");
resultadoIMC.textContent = imc;