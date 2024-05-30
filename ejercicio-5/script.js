$("button").onclick = () => {
  const ladoA = parseFloat($("#ladoA").value);
  const ladoB = parseFloat($("#ladoB").value);
  const ladoC = parseFloat($("#ladoC").value);

  if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    alert("Los lados del area deben ser mayores a cero");
  } else if (!ladoA || !ladoB || !ladoC) {
    alert("Los campos no deben estar vacíos");
  } else if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert("Los lados del area deben ser números");
  } else {
    const area = calcularArea(ladoA, ladoB, ladoC);
    $("#resultado").innerHTML = `Area del terreno: <b>${area} m²</b>`;
  }
};

function calcularArea(ladoA, ladoB, ladoC) {
  const areaRectangulo = ladoB * ladoC;
  const areaTriangulo = ((ladoA - ladoC) * ladoB) / 2;
  const areaTotal = areaRectangulo + areaTriangulo;

  return areaTotal;
}

function $(selector) {
  return document.querySelector(selector);
}
