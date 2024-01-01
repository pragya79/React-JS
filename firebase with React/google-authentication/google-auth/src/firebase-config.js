import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBafoaxQOif_ghnGKiUY8moBWryebirbuw",
    authDomain: "auth-f6d93.firebaseapp.com",
    projectId: "auth-f6d93",
    storageBucket: "auth-f6d93.appspot.com",
    messagingSenderId: "323329534714",
    appId: "1:323329534714:web:0898ab2cf0ef23aa73f743",
    measurementId: "G-D7X6YXXVM6"
  };
  const app=initializeApp(firebaseConfig);
  export const auth=getAuth(app);

  const provider=new GoogleAuthProvider();
 export const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result);
            const name=result.user.displayName;
            const email=result.user.email;
            const photo=result.user.photoURL;

            
            localStorage.setItem("name",name);
            localStorage.setItem("email",email);
            localStorage.setItem("photo",photo);
        }).catch((error)=>{
            console.log(error.message)
        })
  }