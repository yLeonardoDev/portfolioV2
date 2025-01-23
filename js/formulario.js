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
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 2000); // 2 segundos
        } else {
            showError();
        }
    })
    .catch(error => {
        console.error("Erro ao enviar o formulário:", error);
        showError();
    });
});

function showError() {
    const errorMessage = document.createElement('span');
    errorMessage.textContent = "Erro no envio, tente novamente.";
    errorMessage.classList.add('error-message');
    form.appendChild(errorMessage);

    setTimeout(() => {
        errorMessage.remove();
    }, 2000); // 2 segundos
}
