const EMAIL = 'usuario@correo.com';
const PASSWORD = 'Sandia1234';
const botonLogin = document.querySelector("#submit");

const login = (event) => {
    event.preventDefault();
    

    const correo = document.getElementById("iniciar__correo").value;
    const contraseña = document.getElementById("iniciar__contraseña").value;
    const span = document.getElementById("alert_login");


    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Campo de correo electrónico: no debe estar en blanco ni vacío.
    // Campo de contraseña: no debe estar en blanco ni vacío.
    if(correo.trim() === "" || contraseña.trim() === "" ){
        span.classList.add("shown");
        span.textContent = "Por favor ingrese su correo y contraseña"

    } 
    // Debe estar en formato de correo electrónico que contenga el carácter especial @ seguido de un dominio o proveedor seguido de un punto (.)Ejemplo: text@text.com
    else if (!emailRegex.test(correo))  {
        span.classList.add("shown");
        span.textContent = "Correo no válido"
    } 
    // Botón de inicio de sesión: si el usuario está autenticado, debe redirigir al menú de administrador, de lo contrario debe mostrar un mensaje de error.
    else if (correo !== EMAIL || contraseña !== PASSWORD) {
        span.classList.add("shown");
        span.textContent = "Correo o contraseña incorrectos, intente de nuevo."
    } 
    else { 
        console.log("click")
        
        window.location.href = "../productos.html"

    }

}
botonLogin.addEventListener("click", login);

