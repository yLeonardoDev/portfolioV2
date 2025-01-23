const form = document.getElementById('contact-form');
const loader = document.getElementById('loader');
const successMessage = document.getElementById('form-success');
const submitButton = document.getElementById('submit-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    loader.style.display = 'flex';
    submitButton.disabled = true; 

    successMessage.style.display = 'none';

    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    })
    .then(response => {
        loader.style.display = 'none';
        submitButton.disabled = false;

        if (response.ok) {
            successMessage.style.display = 'block';
            form.reset();
        } else {
            alert("Erro no envio, tente novamente."); // Mensagem de erro
        }
    })
    .catch(error => {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro no envio, tente novamente."); // Mensagem de erro
        loader.style.display = 'none';
        submitButton.disabled = false;
    });
});
