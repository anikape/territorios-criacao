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


    //formulário de contato
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contactForm");
      const formResponse = document.getElementById("formResponse");
    
      form.addEventListener("submit", async function (event) {
        event.preventDefault();
    
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);
    
        try {
          const response = await fetch("https://formspree.io/f/manwwqpb", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: formDataJsonString
          });
    
          if (response.ok) {
            formResponse.innerHTML = "<p>E-mail enviado com sucesso!</p>";
            form.reset();
          } else {
            formResponse.innerHTML = "<p>Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.</p>";
          }
        } catch (error) {
          formResponse.innerHTML = "<p>Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.</p>";
        }
    
        // Clear message after 20 seconds
        setTimeout(() => {
          formResponse.innerHTML = "";
        }, 10000);
      });
    });
    
    