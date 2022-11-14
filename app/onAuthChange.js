import { onAuthStateChanged, getIdToken } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { checkInicio } from "./checkInicio.js"
import insertData from "./enviardatos.js"
import readData from "./lecturaData.js"

const setPassForm = document.querySelector("#btn")
const thanksite = document.querySelectorAll(".slide-thanks-site")
let user_id = onAuthStateChanged(auth, async (user) => {
    checkInicio(user)

    if (!user) return

    user.photoURL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FFigura-2-Avatar-que-aparece-por-defecto-en-Facebook_fig1_315108532&psig=AOvVaw3w2ne_ATSqA7vw4twMtiDt&ust=1667875101507000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJjh3YiFm_sCFQAAAAAdAAAAABAE";
    const userId = user?.uid;
    readData(userId)
    
    console.log(user.displayName)
    console.log(userId);
    setPassForm.addEventListener("click", function () {
        insertData(userId, user.displayName, user.photoURL);
    });
})

 