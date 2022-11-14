import { savePass } from "./firebase-firestore.js";
import "./firebase-firestore.js"

console.log("entre al main")
const setPass = document.getElementById("form-pass")
setPass.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("entre a mainfirestore")
    const email = setPass["floatingInput"]
    const pass = setPass["floatingPassword"]
    savePass(email.value, pass.value)
})


