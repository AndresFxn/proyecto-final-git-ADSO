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
