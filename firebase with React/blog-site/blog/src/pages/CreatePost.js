import React, { useState,useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db,auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import '../App.css'
function CreatePost({isAuth}) {
  const [title,setTitle]=useState("");
  const [postText,setPostText]=useState("");

  const postCollectionRef=collection(db,"posts");
  let navigate=useNavigate();
  const createPost=async()=>{
    await addDoc(postCollectionRef,{title:title,postText:postText,author:{name:auth.currentUser?.displayName,id:auth.currentUser?.uid}});
    navigate("/");
  }
  useEffect(()=>{
    if(!isAuth){
      navigate("/")
    }
  },[])
  return (
    <div className='createPostPage'>
      <div className="cpContainer">
        <h2>Create A Post</h2>
        <div className="inputGp">
          <label>Title:</label>
            <input type="text" placeholder='Title...' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="inputGp">
          <label>Post:</label>
            <textarea placeholder='What do you wanna write about...?' onChange={(e)=>setPostText(e.target.value)}/>
        </div>
        <button onClick={createPost}>Post</button>
      </div>
    </div>
  )
}

export default CreatePost
