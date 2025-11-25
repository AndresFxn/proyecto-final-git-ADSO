console.log("Proyecto Final Git – ADSO");


/*
  Rama: feature/login
  Fecha: 2025
  Descripción: Lógica inicial del sistema de login.
*/

function login(usuario, contraseña) {
  if (usuario === "admin" && contraseña === "1234") {
    return "Acceso concedido";
  } else {
    return "Credenciales incorrectas";
  }
}

console.log(login("admin", "1234"));


/*
  Rama: feature/footer
  Fecha: (pon tu fecha de hoy)
  Descripción: Aquí irá el código de la funcionalidad del footer.
*/
/*
  Rama: feature/footer
  Fecha: 2025
  Descripción: Estructura inicial del footer.
*/

function mostrarFooter() {
  return "© 2025 - Proyecto Final Git ADSO";
}

console.log(mostrarFooter());
