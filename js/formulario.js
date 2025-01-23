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

        console.log(response); // Log da resposta para verificar o status

        if (response.ok) {
            successMessage.style.display = 'block';
            form.reset();
            console.log("Mensagem enviada com sucesso!"); // Log para sucesso
        } else {
            alert("Erro no envio, tente novamente.");
            console.error("Erro ao enviar o formulário:", response.status); // Log para erro
        }
    })
    .catch(error => {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro no envio, tente novamente.");
        loader.style.display = 'none';
        submitButton.disabled = false;
    });
});
