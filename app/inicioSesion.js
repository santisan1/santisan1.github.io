import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMsg } from "./showMessage.js"

const inicioSesionForm = document.querySelector("#login-form");

inicioSesionForm.addEventListener("submit", async e => {
    e.preventDefault;
    const name = inicioSesionForm["isname"].value;
    const email = inicioSesionForm["isemail"].value;
    const pass = inicioSesionForm["ispass"].value;
    console.log(name, email, pass)

    try {
        e.preventDefault;
        const credencialDeUsuario = await signInWithEmailAndPassword(auth, email, pass);
        console.log(credencialDeUsuario);
        const modal = bootstrap.Modal.getInstance(document.querySelector("#InicSess"))
        modal.hide();
        if (name) {
            showMsg("Hola otra vez " + name + " <3", "exito")
        } else {
            showMsg("Hola otra vez " + email + " <3", "exito")
        }

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