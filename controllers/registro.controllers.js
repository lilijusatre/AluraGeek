

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(url,"----", id)

    const email =  document.querySelector("[data-email]").value;
    const pasword = document.querySelector("[data-pasword]").value;

});