import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { set, getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js"
import { updateEmail, getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMsg } from "./showMessage.js";
import { auth } from "./firebase.js";


const container = document.querySelectorAll(".container")
const thankssite = document.querySelectorAll(".slide-thanks-site")
thankssite.forEach(link => link.style.display = "none")

const firebaseConfig = {
    apiKey: "AIzaSyBU6pCeaguV2JYA3QTXnNF7HcEvHV67etM",
    authDomain: "montajes-esp32.firebaseapp.com",
    databaseURL: "https://montajes-esp32-default-rtdb.firebaseio.com",
    projectId: "montajes-esp32",
    storageBucket: "montajes-esp32.appspot.com",
    messagingSenderId: "225999678470",
    appId: "1:225999678470:web:465a165626f3c8c2c9a787"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();



const email = document.querySelector("#floatingInput");
const name = document.querySelector("#floatingPassword");

// let btn = document.querySelector(".btn");
const insertData = (userId, displayName, userPhoto) => {
    console.log("Entre a insert data");
    container.forEach(link => link.style.display = "block")
    thankssite.forEach(link => link.style.display = "none")
    set(ref(db, "\User"), {


        userId: userId,
        nombre: displayName,
        pass: name.value,
        email: email.value,
        profilePhoto: userPhoto,
        alarma: 0

    }).then(() => {
        const user = "\User" + userId;
        showMsg("Datos enviados correctamente", "exito");
        container.forEach(link => link.style.display = "none")
        thankssite.forEach(link => link.style.display = "block")
        return user
    }).catch((e) => {
        console.log("El error fue", e);
    })
    email.value = "";
    name.value = "";

}
export default insertData;

