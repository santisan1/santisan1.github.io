import { onAuthStateChanged, getIdToken } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { checkInicio } from "./checkInicio.js"
import insertData from "./enviardatos.js"
import readData from "./lecturaData.js"


const setPassForm = document.querySelector("#btn")
const thanksite = document.querySelectorAll(".slide-thanks-site")
onAuthStateChanged(auth, async (user) => {

    checkInicio(user)
    if (!user) return

    const name = document.querySelector("#isname").value;


    const userId = user?.uid;
    readData(userId)
    setPassForm.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        insertData(userId, name, user.photoURL);
    });

})
