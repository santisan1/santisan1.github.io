import { collection, getFirestore, addDoc, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getAuth, updatePassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js"
import cambiarPass from "./updatePass.js";



const db = getFirestore();
const docRef = doc(db, "Users", "Sincrinizado")
const docSnap = await getDoc(docRef);


const checkPass = () => {
    if (docSnap.exists()) {
        const data = docSnap.data()
        const pass = data.password
        const name = data.name
        document.getElementById('resultado').innerHTML = "Hola " + name + ", Aún no ha cambiado su contraseña. Hagalo a continuación "
        if (pass == "123456") {
            console.log("contraseña")
            $('#weakPass').modal('show')
            const newPass = document.querySelector("#isWeakPass")
            const btn = document.querySelector("#inputWeak")
            btn.addEventListener("click", () => {
                cambiarPass(newPass)

            })

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
}
export default checkPass;