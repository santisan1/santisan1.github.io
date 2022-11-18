import { showMsg } from "./showMessage.js";

emailjs.init('mFhlhc9qMI8ZouO58')
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_opgd53qa';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                showMsg("Espere contacto del servicio técnico", "exito")
                const registerModal = document.querySelector("#registerModal");
                const modal = bootstrap.Modal.getInstance(registerModal);
                modal.hide();

            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });