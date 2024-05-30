const formulario = document.getElementById("formulario");
formulario.onsubmit = function (event) {
  event.preventDefault();

  const peso = parseFloat(formulario["peso"].value);
  const altura = parseFloat(formulario["altura"].value);

  if (peso <= 0 || altura <= 0) {
    alert("El peso y la altura deben ser números positivos");
  } else if (isNaN(peso) || isNaN(altura)) {
    alert("El peso y la altura deben ser números");
  } else if (!peso || !altura) {
    alert("No deben haber campos vacíos");
  } else {
    alert(`Su IMC es de ${calcularIMC(peso, altura)}`);
  }
};

function calcularIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
