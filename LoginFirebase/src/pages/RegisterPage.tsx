import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function RegisterPage() {

  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleRegister = async () => {
    try {
      await register(form.email, form.password);
      alert("Usuario creado");
      navigate("/");
    } catch {
      alert("Error al registrar");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Correo" onChange={e => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Contraseña" onChange={e => setForm({...form, password: e.target.value})}/>
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default RegisterPage;