// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD4qo3i8hUVVlHtkDcvsvOCOx2_aQpL70",
  authDomain: "codepen-clone-e0a20.firebaseapp.com",
  projectId: "codepen-clone-e0a20",
  storageBucket: "codepen-clone-e0a20.appspot.com",
  messagingSenderId: "607683977999",
  appId: "1:607683977999:web:d4c0848df2fb49392a547a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);