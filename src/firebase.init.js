// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB259Lhf9XZ8IT0XYIhwftniIZmaTMfucw",
    authDomain: "sunshine-task-1.firebaseapp.com",
    projectId: "sunshine-task-1",
    storageBucket: "sunshine-task-1.appspot.com",
    messagingSenderId: "805382838613",
    appId: "1:805382838613:web:15751a6fad971d3786b7dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth