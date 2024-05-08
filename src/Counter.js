// import React from 'react';
// import { useState } from 'react'

// export default function Counterapp(){
//     const[count,setCount]=useState(0)
//     const handleclick =() =>{
//       setCount((previouscount) => previouscount +1)
//     }
//     const handleclickable =() =>{
//       setCount((previouscount) => previouscount -1)
//     }
//     const myreset =() => {
//       setCount(0)
//     }
//     return (
//       <div>
//         <button onClick={handleclick}>+</button>
//         <p>{count}</p>
//         <button onClick={handleclickable}> -</button>
//         <button onClick={myreset}>Reset</button><br></br>
//       </div>
//     )
//    }

const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
let nameWithoutGrace = names.filter((name)=> name != "Grace Hopper")
console.log(nameWithoutGrace)