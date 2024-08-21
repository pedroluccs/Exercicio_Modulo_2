const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {

    if (nameInput.value === "") {
        alert("Por favor, preencha seu nome");
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

form.submit()
});