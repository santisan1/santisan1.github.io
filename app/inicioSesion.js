import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMsg } from "./showMessage.js"

const inicioSesionForm = document.querySelector("#login-form");

inicioSesionForm.addEventListener("submit", async e => {
    e.preventDefault;
    const email = inicioSesionForm["isemail"]
    const pass = inicioSesionForm["ispass"]
    const emailValue=email.value
    const passValue=pass.value
    console.log(email.value, pass.value)

    try {
        const credencialDeUsuario = await signInWithEmailAndPassword(auth,emailValue, passValue);
        console.log(credencialDeUsuario);
        const modal = bootstrap.Modal.getInstance(document.querySelector("#InicSess"))
        modal.hide();
        showMsg("Hola otra vez <3", "exito")

    } catch (error) {
        if (error.code === "auth/user-not-found") {
            showMsg("Email no encontrado", "error")
        } else if (error.code === "auth/wrong-password") {
            showMsg("Contraseña incorrecta :(", "error")
        } else if (error.code) {
            showMsg("algo salió mal", "error")
        }
    }

})