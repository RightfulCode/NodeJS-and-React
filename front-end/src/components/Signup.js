import React,{ useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    })

    const collectData = async () => {
        console.warn(name,email,password)
        let result = await fetch('http://localhost:5000/register', {
            method:"post",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':"application/json"
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result) {
            navigate("/")
        }
    }

    return (
        <div className="register">
            <h1>Registration</h1>
            Name:    <input className="inputBox" type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/> <br />
            E-mail:  <input className="inputBox" type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /><br />
            Password:<input className="inputBox" type="password"  value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /><br />
            <button type="button" className="button" onClick={collectData}>Sign Up</button>
        </div>
    )
}

export default SignUp;