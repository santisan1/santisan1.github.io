import { collection, getFirestore, addDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js"
// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyBU6pCeaguV2JYA3QTXnNF7HcEvHV67etM",
    authDomain: "montajes-esp32.firebaseapp.com",
    databaseURL: "https://montajes-esp32-default-rtdb.firebaseio.com",
    projectId: "montajes-esp32",
    storageBucket: "montajes-esp32.appspot.com",
    messagingSenderId: "225999678470",
    appId: "1:225999678470:web:465a165626f3c8c2c9a787"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore();

const savePass = (name, email, pass, userId, photoURL, hora) => {
    console.log("enviado")
    addDoc(collection(db, "Users"), {
        name: name,
        email: email,
        password: pass,
        userId: userId,
        fotoURL: photoURL,
        hora: hora

    })
}
export default savePass;