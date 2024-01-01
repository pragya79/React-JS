import './App.css';
import {useState,useEffect} from 'react'
import {db} from './firebase-config';
import {collection,getDocs,addDoc, updateDoc,doc,deleteDoc} from "firebase/firestore"
function App() {
  const [users,setUsers]=useState([]);
  const [newName,setNewName]=useState("");
  const [newAge,setNewAge]=useState(0);
  const usersCollectionRef=collection(db,"users");//for whole document
  const createUser=async()=>{
      await addDoc(usersCollectionRef,{Name:newName,Age:Number(newAge)})
  };

  const updateUser=async(id,age)=>{
    const userDoc=doc(db,"users",id)//for single document
    const newFields={age:age+1}
    await updateDoc(userDoc,newFields)
  }

  const deleteUser=async(id)=>{
    const userDoc=doc(db,"users",id)//for single document
    await deleteDoc(userDoc)
  }
  useEffect(()=>{
     
    const getUsers=async()=>{
        const data=await getDocs(usersCollectionRef);
        console.log(data);
        setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUsers();
  },[])
  return (
    <div className="App">
      <input 
      type="text" 
      placeholder='Name...'
       onChange={(e)=>{setNewName(e.target.value)}}
        />

      <input 
      type="number" 
      placeholder='Age...'
      onChange={(e)=>{setNewAge(e.target.value)}}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user)=>{
        return <div>
                    <h2>{user.Name}</h2>
                    <h2>{user.Age}</h2>
                    <button onClick={()=>{updateUser(user.id,user.Age)}}>Increase Age</button>
                    <button onClick={()=>deleteUser(user.id)}>Delete</button>
                </div>})}
    </div>
  );
}

export default App;
