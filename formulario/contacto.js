function valida() {
  event.preventDefault();
  var f = document.contacto;
  var nombre = f.nombre.value;
  var correo = f.correo.value;
  var mensaje = f.mensaje.value;
  var enombre = document.getElementById("enombre");
  var ecorreo = document.getElementById("ecorreo");
  var emensaje = document.getElementById("emensaje");
  let errores = [];

  if (nombre == "") {
    enombre.innerHTML = "Campo nombre obligatorio";
    errores.push("Campo nombre obligatorio");
  } else {
    enombre.innerHTML = "";
    if (specials(nombre) == 1) {
      enombre.innerHTML += "El campo contiene caracteres inválidos";
      errores.push("El campo contiene caracteres inválidos");
    } else {
      enombre.innerHTML = "";
    }
  }

  if (correo == "") {
    ecorreo.innerHTML = "Campo correo obligatorio";
    errores.push("Campo correo obligatorio");
  } else {
    ecorreo.innerHTML = "";
    var filtro_correo = new RegExp(
      "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9])+$"
    );
    if (!filtro_correo.test(correo)) {
      ecorreo.innerHTML = "El campo correo contiene caracteres inválidos";
      errores.push("El campo correo contiene caracteres inválidos");
    } else {
      ecorreo.innerHTML = "";
    }
  }

  if (mensaje == "") {
    emensaje.innerHTML = "Campo mensaje obligatorio";
    errores.push("Campo mensaje obligatorio");
  } else {
    emensaje.innerHTML = "";
    if (specials(mensaje) == 1) {
      emensaje.innerHTML += "El campo contiene caracteres inválidos";
      errores.push("El campo contiene caracteres inválidos");
    } else {
      emensaje.innerHTML = "";
    }
  }

  var mensajes = document.getElementById("mensajes");
  if (
    enombre.innerHTML == "" &&
    ecorreo.innerHTML == "" &&
    emensaje.innerHTML == ""
  ) {
    mensajes.style.display = "block";
    mensajes.innerHTML = "Datos enviados";
    mensajes.tabIndex = 0;
    mensajes.focus();
  } else {
    mensajes.style.display = "block";
    mensajes.innerHTML = "";
    let list = document.createElement("ul");
    for (let error of errores) {
      var item = document.createElement("li");
      item.appendChild(document.createTextNode(error));
      item.tabIndex = 0;
      list.appendChild(item);
    }
    var mensaje = document.createElement("p");
    mensaje.innerHTML = "Hay errores en el formulario: ";
    mensaje.tabIndex = 0;
    mensajes.appendChild(mensaje);
    mensajes.appendChild(list);
    mensajes.tabIndex = 0;
    mensajes.focus();
  }
}

special_chars = [
  "<",
  ">",
  "!",
  "¡",
  "?",
  "¿",
  "{",
  "}",
  "[",
  "]",
  "#",
  "$",
  "%",
  "&",
  "|",
  "\\",
  "*",
];

function specials(campo) {
  var n = 0;
  special_chars.forEach(function (special) {
    if (campo.indexOf(special) != -1) {
      n++;
    }
  });
  if (n > 0) {
    return 1;
  } else {
    return 0;
  }
}

function my_specials(campo) {
  var my_specials = "";
  special_chars.forEach(function (special) {
    if (campo.indexOf(special) != -1) {
      my_specials += " " + special;
    }
  });
  return my_specials;
}

var timer;
var counterTextArea = document.getElementById("mensaje");
var counterNumber = document.getElementById("counterNumber");
var counterLive = document.getElementById("counterLive");
counterTextArea.addEventListener("input", counterLiveUpdate);
function counterLiveUpdate() {
  counterNumber.innerHTML = 140 - counterTextArea.value.length;
  clearTimeout(timer);
  timer = setTimeout(function () {
    counterLive.innerHTML =
      140 - counterTextArea.value.length + " caracteres restantes.";
  }, 2000);
}
