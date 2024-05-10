import React from 'react';
import { useState,useEffect } from 'react';
const Dashboard = () => {
  const [name,setName]=useState("")
  useEffect (()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then((Response)=> Response.json())
     .then((data)=>setName(data))
     .catch((error)=> console.log("Error fetching data",error))
     
  },[])
  
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard!</p>
  <ul>
    {name.map((user)=>(
      <li key={user.id}>
        <p>Name:{user.name}</p>
      </li>
    )

    )}
  </ul>
    </div>
  );
};

export default Dashboard;
