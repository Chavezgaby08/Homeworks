import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

function LoginPage(){

    const {login} = useAuth();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = () => {

        const success = login(form.email, form.password);

        if (success) {

            navigate("/books");

        } else {

            alert("Las credenciales son incorrectas");
        }
    };

    return (
        <div>

            <h1>Login</h1>

            <input name="email" placeholder="Email" onChange={handleChange}/>
            
            <input name="password" placeholder="Contraseña" type="password" onChange={handleChange}/>
            
            <button onClick={handleLogin}>Entrar</button>

        </div>
    );
}

export default LoginPage;