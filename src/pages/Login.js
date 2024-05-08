import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export default function Login({ setLoggedIn }){
    // Initialize navigate function from useNavigate hook
    const navigate = useNavigate(); 

    const [username, Setusername] = useState("")
    const [password, Setpassword] = useState("")
    const [error, setError] = useState("")
    const [success, setsuccess] = useState("")


        //  const handleSubmit = async(event) => {
        //     event.preventDefault();
        //     try {
        //         const response = await axios.post(`http://localhost:5000/login`);
        //         if (response.data.length === 1) {
        //           // Authentication successful
        //           localStorage.setItem('token', 'fakeToken'); // Just for demonstration
        //           history.push('/dashboard');
        //         } else {
        //           setError('Invalid username or password');
        //         }
        //       } catch (error) {
        //         setError('An error occurred');
        //       }
        // };       
        
        // var user = {
        //     username: "ukpono",
        //     "one": 1,
        //     1: "some value"
        //   };

        const users = ["ukpono", "brandon", "covenant"]

        function handleSubmit(event){
            event.preventDefault();
            if(users.includes(username)){
                setsuccess("Successfully login")
                localStorage.setItem("token", 'xNTU2MDo-hoeaMZY3g');
                setLoggedIn(true);
                navigate("/dashboard");
            }else{
                setError("Username not found")
            }

            // axios.post('http://localhost:5000/login/', {
            //     username: username,
            //     password: password
            //   })
            //   .then(function (response) {
            //     setsuccess("login succesfully");
            //   })
            //   .catch(function (error) {
            //     setError("an error occured..");
            //   });

        }
        function handleUsername(event){
            return(
                Setusername(event.target.value)
                
            )
        }

        function handlePassword(event){
            return(
                Setpassword(event.target.value)
                
            )
        }
        
    return(
        <> 
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="name" onChange={handleUsername}/>
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={handlePassword}/>
            </label>
            <input type="submit" value="Submit" />
            {success ? <p>{success}</p> : <p>{error}</p>}

        </form>
        </>

    )
}