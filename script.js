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
    
    
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contactForm2");
      const formResponse2 = document.getElementById("formResponse2");
    
      form.addEventListener("submit", async function (event) {
        event.preventDefault();
    
        const formData = new FormData(form);
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);
    
        try {
          const response = await fetch("https://formspree.io/f/mwpeevyg" ,{
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: formDataJsonString
          });
    
          if (response.ok) {
            formResponse2.innerHTML = "<p>E-mail enviado com sucesso!</p>";
            form.reset();
          } else {
            formResponse2.innerHTML = "<p>Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.</p>";
          }
        } catch (error) {
          formResponse2.innerHTML = "<p>Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.</p>";
        }
    
        // Clear message after 20 seconds
        setTimeout(() => {
          formResponse2.innerHTML = "";
        }, 10000);
      });
    });


    /**Exclusão de cache e cookies */

    function clearCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
  }

  function forceRefresh() {
      var now = new Date().getTime();
      if (localStorage.getItem('lastLoadTime')) {
          var lastLoadTime = parseInt(localStorage.getItem('lastLoadTime'));
          if (now - lastLoadTime > 5 * 60 * 1000) { // 5 minutos
              clearCookies();
              localStorage.setItem('lastLoadTime', now);
              location.reload(true); // Força a atualização da página
          }
      } else {
          localStorage.setItem('lastLoadTime', now);
      }
  }

  window.onload = function() {
      forceRefresh();
  };
