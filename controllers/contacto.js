
const formulario = document.querySelector(".formulario__contacto");
const mensaje = document.querySelector("#msg");
document.getElementById("msg").value = "";

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    //referencia a los cmpos
    const mensaje = document.querySelector("#msg");
    const nombre = document.querySelector("#name");
    if(nombre.value.trim() === "" || mensaje.value.trim() === "" ){
        alert("Por favor, completa todos los campos para enviar el mensaje");
    } else {
        alert("Mensaje enviado");
        formulario.reset();
    }
});

const contador = document.getElementById("contador");
const mensajeLimite = document.getElementById("mensaje-limite");
formulario.addEventListener("blur", () => {
})
mensaje.addEventListener("keypress", () =>{
    console.log(mensaje.value.length)
    contador.classList.add("shown");
    contador.textContent = mensaje.value.length + "/120";
    if(mensaje.value.length > 118){
        mensajeLimite.classList.add("shown");
    }
})
