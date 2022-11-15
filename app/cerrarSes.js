import {signOut} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import {auth} from "./firebase.js"
import { showMsg } from "./showMessage.js";



const cerrarSes = document.querySelector("#cerrarSesion1");
cerrarSes.addEventListener("click", async ()=>{
    await signOut(auth);

    showMsg ("¡Hasta luego!", "log");

    console.log("Cerró sesión")
})