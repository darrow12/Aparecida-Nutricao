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
  }
  
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura inválida!");
    alturaValida = false;
    resultadoIMC.textContent = "Altura inválida!";
  }
  
  if (pesoValido && alturaValida) {
    const imc = peso / (altura * altura);
    resultadoIMC.textContent = imc.toFixed(2);
  }
}