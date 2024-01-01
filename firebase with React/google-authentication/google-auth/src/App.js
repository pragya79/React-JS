import React from 'react';
import './App.css';
import { signInWithGoogle } from './firebase-config';

function App() {
  return (
    <div className="App">
      <button className="btn"onClick={signInWithGoogle}><i class="fa-brands fa-google"></i>Sign In with Google</button>
      <h3>{localStorage.getItem("name")}</h3>
      <h3>{localStorage.getItem("email")}</h3>
      <img src={localStorage.getItem("photo")}/>
    </div>
  );
}

export default App;
