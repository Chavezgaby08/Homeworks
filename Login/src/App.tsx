import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BooskPage from "./pages/BooskPage";
import QueuePage from "./pages/QueuePage";
import PrivateRoute from "./routes/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import './App.css';

function App() {

  const {user, logout} = useAuth();

  return (
    <BrowserRouter>
      <h2>Bienvenido {user}</h2>
      {user && <button onClick={logout}>Cerrar sesión</button>}

      <Routes>

        <Route path="/" element={<LoginPage/>} />
        <Route path="/books" element = { <PrivateRoute><BooskPage/></PrivateRoute>} />
        <Route path="/queue" element = { <PrivateRoute> <QueuePage/></PrivateRoute>} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
