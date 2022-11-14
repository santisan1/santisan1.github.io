import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMsg } from "./showMessage.js"

const registerForm = document.querySelector("#registrer-form");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = registerForm["register-nombre"].value;
    const email = registerForm["register-email"].value;
    const pass = registerForm["register-pass"].value;
    console.log(email, pass);

    try {
        //intentamos crear usuario, en espera de los inputs
        var credencialDeUsuario = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(credencialDeUsuario);
        
        

        const registerModal = document.querySelector("#registerModal");
        const modal = bootstrap.Modal.getInstance(registerModal);
        modal.hide();
        showMsg("Bienvenido " + name + "  <3", "exito");

    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            showMsg("Email ya registrado :(", "error")
        } else if (error.code === "auth/invalid-email") {
            showMsg("Email invalido :(")
        } else if (error.code === "auth/weak-password") {
            showMsg("Contraseña > 6 digits")
        } else if (error.code) {
            showMsg("algo salió mal")
        }

    }

})