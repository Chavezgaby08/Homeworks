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
    <div className="register-page">
      <h1>Register</h1>
      <div className="register-form">
        <input 
          placeholder="Correo" 
          onChange={e => setForm({...form, email: e.target.value})}
          className="register-input"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          onChange={e => setForm({...form, password: e.target.value})}
          className="register-input"
        />
        <button onClick={handleRegister} className="register-button">Registrarse</button>
      </div>
    </div>
  );
}

export default RegisterPage;