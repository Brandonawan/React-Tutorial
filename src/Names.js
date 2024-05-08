import React from 'react';

export default function Names(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    return(
        <>
        <ul>
            {names.map((name)=>
            <li key={name}>{name}</li>
        )}
        </ul>
        </>
    )
}