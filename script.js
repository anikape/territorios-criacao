function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensagem").value = "";
}



    // Seleciona o elemento <span> onde o ano será inserido
    const yearSpan = document.getElementById('year');

    // Obtém o ano atual
    const currentYear = new Date().getFullYear();

    // Insere o ano atual no elemento <span>
    yearSpan.textContent = currentYear;