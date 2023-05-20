import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleChangeUsername(event) {
        setUsername(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }
    
    function handleOnSubmit(event) {
        alert('oi')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={username} onChange={handleChangeUsername} placeholder="username" />
            <input type="password" value={password} onChange={handleChangePassword} placeholder="password" />
            <button>entrar</button>
        </form>
    );
};
