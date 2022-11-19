import { getAuth, updatePassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

const auth = getAuth();




const cambiarPass = (newPass) => {


    updatePassword(user, newPass).then(() => {
        console.log("god")
    }).catch((error) => {
        console.log(error)
    });


}
export default cambiarPass

