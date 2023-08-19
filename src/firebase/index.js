import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdjLBlaUosvM04iQtc5xrvIlEJng3S_cc",
  authDomain: "shivafirebase-5ebd8.firebaseapp.com",
  projectId: "shivafirebase-5ebd8",
  storageBucket: "shivafirebase-5ebd8.appspot.com",
  messagingSenderId: "340070699311",
  appId: "1:340070699311:web:6e62ebfadd72f7bca7d1da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
