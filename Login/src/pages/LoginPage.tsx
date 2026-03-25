import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../FireBase/config";

import { useAuth } from "../hooks/useAuth";

function LoginPage(){

    const navigate = useNavigate();
    const { login } = useAuth();

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

    const handleLogin = async () => {

        try {
            await signInWithEmailAndPassword(
                auth, form.email, form.password
            );
            login(form.email, form.password);
            navigate("/books");
        }catch (error: any) {
            alert("Error al iniciar sesión: " + error.message);
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