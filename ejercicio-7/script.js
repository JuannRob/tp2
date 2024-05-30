$("#btnMostrarUsuarios").onclick = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (res.ok) {
    usuarios = await res.json();
    usuarios.forEach((usuario) => {
      const item = document.createElement("li");

      const userInfo = document.createElement("span");
      userInfo.textContent =
        `${usuario.id} - ${usuario.name} - ${usuario.username} - ${usuario.email} - ${usuario.website}`;
      item.appendChild(userInfo);

      const boton = document.createElement("button");
      boton.classList.add("btnVerTareas");
      boton.textContent = "Ver tareas";
      boton.onclick = () => {
        mostrarTareas(usuario);
      };
      item.appendChild(boton);

      $("#listaUsuarios").appendChild(item);
    });
  } else {
    alert("Error al obtener los usuarios");
  }

  $("#btnMostrarUsuarios").hidden = true;
};

async function mostrarTareas(usuario) {
  const tareas = await buscarTareas(usuario.id);
  $("#tareasUsuario").innerHTML = "";
  $("#nombreUsuario").textContent = `Tareas de ${usuario.name} [${usuario.id}]: `;
  tareas.forEach((tarea) => {
    const item = document.createElement("li");
    if (tarea.completed) {
      item.textContent = "✓ " + tarea.title;
      item.style.color = "green";
    } else {
      item.textContent = "✗ " + tarea.title;
      item.style.color = "red";
    }
    item.style.listStyle;
    $("#tareasUsuario").appendChild(item);
  });
}

async function buscarTareas(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  if (res.ok) {
    return await res.json();
  } else {
    alert("Error al obtener las tareas");
  }
}

function $(selector) {
  return document.querySelector(selector);
}
