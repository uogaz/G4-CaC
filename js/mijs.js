document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("cto_frm");

  var validarNombre = function (e) {
    if (formulario.nombre.value.length < 10) {
      alert("Por favor, escribe tu nombre y apellido.");
      document.getElementById("nombre").focus();
      return false;
    }
    return true;
  };

  var validarDireccion = function (e) {
    if (formulario.direccion.value.length < 10) {
      alert("Por favor, escribe tu dirección.");
      document.getElementById("direccion").focus();
      return false;
    }
    return true;
  };

  var validarCiudad = function (e) {
    if (formulario.ciudad.value.length < 10) {
      alert("Por favor, escribe el nombre de tu ciudad.");
      document.getElementById("ciudad").focus();
      return false;
    }
    return true;
  };

  var validarCodigo = function (e) {
    var cp = document.getElementById("codigo").value;
    if (isNaN(cp) || cp < 1000 || cp > 9999) {
      alert("Por favor, escribe tu código postal correctamente.");
      document.getElementById("codigo").focus();
      return false;
    }
    return true;
  };

  var validarCorreo = function (e) {
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.getElementById("email").value;
    if (!expresion.test(email)) {
      alert("Por favor, escribe un email válido.");
      document.getElementById("email").focus();
      return false;
    }
    return true;
  };

  var validarMensaje = function () {
    if (formulario.mensaje.value.length == 0) {
      alert("Por favor, escribe algun mensaje válido.");
      document.getElementById("mensaje").focus();
      return false;
    }
    return true;
  };

  var validar = function () {
    return (
      validarNombre() &&
      validarDireccion()&&
      validarCiudad()&&
      validarCodigo()&&
      validarCorreo() &&
      validarMensaje()
    );
  };

  formulario.addEventListener("submit", handleSubmit);
  async function handleSubmit(event) {
    event.preventDefault();
    if (validar()) {
      const form = new FormData(this);
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        this.reset();
        alert(
          "Gracias por contactarte con nosotros. En breve nos estaremos comunicando."
        );
      }
    }
  }
});
