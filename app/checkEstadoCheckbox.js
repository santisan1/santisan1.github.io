import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { set, getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js"
import { updateEmail, getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { showMsg } from "./showMessage.js";
import { auth } from "./firebase.js";

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

const insertData2 = (datax) => {
    console.log("Entre a insert data");
    set(ref(db, "\User\ escritura"), {
        dataX: datax,
    }).then(() => {
        const user = "\User";
    }).catch((e) => {
        console.log("El error fue", e);
    })

}



function read() {
    var estaSeleccionado = $('#defaultCheck1').is(":checked");
    if (estaSeleccionado == true) {
        const datax = 1;
        insertData2(datax)
        console.log(datax)

    } else {
        const datax1 = 0;
        insertData2(datax1)
        console.log(datax1)
    }
    console.log(estaSeleccionado)
}

setInterval(read, 500);