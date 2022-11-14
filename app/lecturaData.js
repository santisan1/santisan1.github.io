import { showMsg } from "./showMessage.js";
import { set, getDatabase, ref, get, child, } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js"

const db = getDatabase();

let alarmVal;
let emailValue;
let send = 1
let sand = 1

const readData = (userId) => {
    const dbref = ref(db);
    const user_id = userId
    console.log(userId)
   
    get(child(dbref, "\User" + user_id)

    ).then((snapshot) => {

        alarmVal = snapshot.val().alarma;
        emailValue = snapshot.val().email;
        return user_id
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
    return userId
}
export default readData;
