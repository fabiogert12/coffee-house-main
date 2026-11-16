
// FORMULÁRIO DE CONTATO

const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value;

        const resposta = document.getElementById("resposta");

        const idioma = document.documentElement.lang;

        if (
            nome.trim() === "" ||
            email.trim() === "" ||
            assunto.trim() === "" ||
            mensagem.trim() === ""
        ) {
            resposta.textContent = idioma === "en"
                ? "Please fill in all fields!"
                : "Preencha todos os campos!";

            return;
        }

        resposta.textContent = idioma === "en"
            ? "Thank you, " + nome + "! Your message has been received."
            : "Obrigado, " + nome + "! Sua mensagem foi recebida.";

        formulario.reset();

    });

}


// MODO ESCURO

const botaoTema = document.getElementById("themeToggle");
console.log(botaoTema);
const temaSalvo = localStorage.getItem("tema");

// Verifica se o usuário já escolheu o modo escuro
if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
}

// Verifica se o botão existe na página
if (botaoTema) {

    // Define o texto inicial do botão
    botaoTema.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Modo claro"
        : "🌙 Modo escuro";

    // Detecta quando o usuário clica no botão
    botaoTema.addEventListener("click", function () {
        

        document.body.classList.toggle("dark-mode");

        const modoEscuroAtivo = document.body.classList.contains("dark-mode");

        // Atualiza o texto do botão
        botaoTema.textContent = modoEscuroAtivo
            ? "☀️ Modo claro"
            : "🌙 Modo escuro";

        // Salva a preferência do usuário
        localStorage.setItem("tema", modoEscuroAtivo ? "escuro" : "claro");
    });
}
