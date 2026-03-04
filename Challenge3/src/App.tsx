import { useState } from "react";
import SongsPagina from "./Paginas/paginaCanciones";
import BrowserPagina from "./Paginas/paginaNavegador";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState<"canciones" | "navegador">("canciones");

  return (
    <div className="app-container">
      <h1 className="app-title">Aplicación</h1>

      <div className="nav-buttons">
        <button onClick={() => setPagina("canciones")}>Reproductor de Música</button>
        <button onClick={() => setPagina("navegador")}>Historial del Navegador</button>
      </div>

      {pagina === "canciones" && <SongsPagina />}
      {pagina === "navegador" && <BrowserPagina />}
    </div>
  );
}

export default App;