import { useState, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {

  const { login } = useAuth();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await login(form.email, form.password);
      setUser(res.user.email);
      navigate("/filesystem");
    } catch {
      alert("Error en login");
    }
  };

  return (
   <div className="login-page">
      <h1>Login</h1>
      <div className="login-form">
        <input 
          placeholder="Correo" 
          onChange={e => setForm({...form, email: e.target.value})}
          className="login-input"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          onChange={e => setForm({...form, password: e.target.value})}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Ingresar</button>
      </div>
      <p className="login-link">¿No tienes cuenta? <Link to="/register">Registrarse</Link></p>
    </div>
  );
}

export default LoginPage;