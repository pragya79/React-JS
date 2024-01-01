import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAx3XskHUGJnEqi2FAz6GP_YRvgJ7c5bIw",
    authDomain: "fir-react-e4908.firebaseapp.com",
    projectId: "fir-react-e4908",
    storageBucket: "fir-react-e4908.appspot.com",
    messagingSenderId: "872126433014",
    appId: "1:872126433014:web:f2a670ec95b71b89104ed7",
    measurementId: "G-2YSB11XV1X"
  };
  const app=initializeApp(firebaseConfig);
 export const db=getFirestore(app);