const form = $("form");

form.onsubmit = (event) => {
  event.preventDefault();

  let msj = "Datos válidos";
  let msjColor = "green";

  if (form["nombre"].value.length > 50 || form["apellido"].value.length > 50) {
    msj = "Nombre o apellido no puede tener más de 50 caracteres";
    msjColor = "red";
  }

  if (form["edad"].value < 18) {
    msj = "Edad no puede ser menor a 18";
    msjColor = "red";
  }

  if (form["altura"].value < 0 || form["altura"].value > 230) {
    msj = "Altura no puede ser menor a 0 o mayor a 230 cm";
    msjColor = "red";
  }

  if (!form["correo"].value.includes("@")) {
    msj = "Correo electrónico debe contener @";
    msjColor = "red";
  }

  $("#resultado").textContent = msj;
  $("#resultado").style.color = msjColor;
};

function $(selector) {
  return document.querySelector(selector);
}
