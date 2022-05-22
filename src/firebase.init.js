// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACWkb4TQ7f-Xy6Sm_47w75ScLpkN-0mus",
  authDomain: "tools-manufacturer-88bc3.firebaseapp.com",
  projectId: "tools-manufacturer-88bc3",
  storageBucket: "tools-manufacturer-88bc3.appspot.com",
  messagingSenderId: "750782519762",
  appId: "1:750782519762:web:58894897fd35fd1456100b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
