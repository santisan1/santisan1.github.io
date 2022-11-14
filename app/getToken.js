import { onAuthStateChanged, getIdToken } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
const getIdTokenPromise = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            checkInicio(user)
            unsubscribe();
            if (user) {
                checkInicio(user)
                getIdToken(user).then((idToken) => {
                    console.log(idToken)
                    const idTOken = resolve(idToken);
                }, (error) => {
                    console.log("ocurrio un error")
                    resolve("null");
                });
            } else {
                console.log("ocurrio un error")
                resolve(null);
            }
        });
    });
};
