import { showMsg } from "./showMessage.js";
import { set, getDatabase, ref, get, child, } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js"

import "https://smtpjs.com/v3/smtp.js"

const db = getDatabase();


let alarmVal;
let emailValue;
let send = 1
let sand = 1

const readData = (userId) => {
    const dbref = ref(db);

    get(child(dbref, "\User")

    ).then((snapshot) => {

        alarmVal = snapshot.val().alarma;
        emailValue = snapshot.val().email;

    });
    if (alarmVal == 1 && sand == 1) {
        // sendEmail();
        console.log("Alarma 1");
        showMsg("La alarma está sonando!", "error")
        sand = 0;

    } else if (alarmVal == 0 && send == 1) {
        console.log("Alarma 0")
        send = 0;

    }

}
setInterval(readData, 500);
export default readData;
