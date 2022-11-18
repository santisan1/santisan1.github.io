import { signInWithEmailAndPassword, getAuth, onAuthStateChanged, getIdToken } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMsg } from "./showMessage.js"
import savePass from "../Firebase-firestore-Data/firebase-firestore.js"

const auth = getAuth()
const inicioSesionForm = document.querySelector("#input-inic");

inicioSesionForm.addEventListener("click", async e => {
    e.preventDefault;
    const name = document.querySelector("#isname").value;
    const email = document.querySelector("#isemail").value;
    const pass = document.querySelector("#ispass").value;
    console.log(name, email, pass)

    try {
        const credencialDeUsuario = await signInWithEmailAndPassword(auth, email, pass);
        console.log(credencialDeUsuario);
        const modal = bootstrap.Modal.getInstance(document.querySelector("#InicSess"))
        modal.hide();
        if (name) {
            showMsg("Hola otra vez " + name + " <3", "exito")
        } else {
            showMsg("Hola otra vez " + email + " <3", "exito")
        }
        onAuthStateChanged(auth, async (user) => {
            const userPhotoURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FFigura-2-Avatar-que-aparece-por-defecto-en-Facebook_fig1_315108532&psig=AOvVaw3w2ne_ATSqA7vw4twMtiDt&ust=1667875101507000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjh3YiFm_sCFQAAAAAdAAAAABAE";
            savePass(name, email, pass, user.uid, userPhotoURL, hora)
        })

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