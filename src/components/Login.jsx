import { useState } from "react";
import axios from "axios";
import UserLists from "./UserLists";

export default function Login() {
    const [token, setToken] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }
    

    function handleOnSubmit(event) {
        const URL = "http://127.0.0.1:8000/api-token-auth/"
        
        axios.post(URL, {username: username, password: password})
        .then(response => {
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)
        })
        
        event.preventDefault()
    }

    function handleLogout() {
        localStorage.removeItem('token')
        setToken("")
    }

    if(!token) 
        return (
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={username} onChange={handleChangeUsername} placeholder="username" />
                <input type="password" value={password} onChange={handleChangePassword} placeholder="password" />
                <button>entrar</button>
            </form>
        );

    return (
        <>
            <UserLists /> 
            <button onClick={handleLogout}>Logout</button>  
        </>
    );
};
