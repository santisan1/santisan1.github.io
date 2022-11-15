import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMsg } from "./showMessage.js"

const registerForm = document.querySelector("#buttoan");

registerForm.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#hack-email").value;
    const pass = document.querySelector("#hack-pass").value;
    console.log(email, pass);

    try {
        //intentamos crear usuario, en espera de los inputs
        var credencialDeUsuario = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(credencialDeUsuario);
        

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