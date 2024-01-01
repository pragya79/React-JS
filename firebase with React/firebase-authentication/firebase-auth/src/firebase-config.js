import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyANJhxrC8LmqwKpifJm_1IwWCtj6L2X5L4",
    authDomain: "fir-auth-4e88e.firebaseapp.com",
    projectId: "fir-auth-4e88e",
    storageBucket: "fir-auth-4e88e.appspot.com",
    messagingSenderId: "233797499346",
    appId: "1:233797499346:web:2e5e5173d37c881b94f00b",
    measurementId: "G-FHQQ97HBYW"
  };
  const app=initializeApp(firebaseConfig);
  export const auth=getAuth(app);