import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMsg } from "./showMessage.js";
const auth = getAuth();

const recoveryForm = document.querySelector("#registrer-form");
recoveryForm.addEventListener("submit", async e => {
    e.preventDefault;
    const email = document.querySelector("#register-email").value;
    console.log(email)
    try {
        const emailrecovery = await sendPasswordResetEmail(auth, email)
        showMsg("Email enviado correctamente", "exito")
        console.log("exito al enviar mail")
        const modal = bootstrap.Modal.getInstance(document.querySelector("#registrer-form"))
        modal.hide();
    } catch (error) {
        showMsg("Ocurrió un error")
    }
    // sendPasswordResetEmail(auth, email)
    //     .then(() => {
    //         // Password reset email sent!
    //         // ..
    //     })
    //     .catch((error) => {

    //         // ..
    //     });

})