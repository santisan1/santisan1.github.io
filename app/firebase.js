// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
