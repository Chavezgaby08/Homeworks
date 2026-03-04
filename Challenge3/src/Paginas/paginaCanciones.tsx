import { useState } from "react";
import { LinkedList } from "../Estructuras/LinkedList";

interface Cancion {
  titulo: string;
  artista: string;
}

function paginaCanciones() {
  const [listaCanciones] = useState(() => {
    const lista = new LinkedList<Cancion>();

    lista.append({ titulo: "Canción 1", artista: "Artista A" });
    lista.append({ titulo: "Canción 2", artista: "Artista B" });
    lista.append({ titulo: "Canción 3", artista: "Artista C" });

    return lista;
  });

  const canciones = listaCanciones.getAll();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const siguienteCancion = () => {
    if (currentIndex < canciones.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const anteriorCancion = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="card">
        <h2>🎵 Reproductor (Linked List)</h2>
        <p>
            <strong>{canciones[currentIndex].titulo}</strong><br />
            {canciones[currentIndex].artista}
        </p>
        <div className="action-buttons">
            <button className="back-btn" onClick={anteriorCancion}>Anterior</button>
            <button className="next-btn" onClick={siguienteCancion}>Siguiente</button>
        </div>
    </div>
  );
}

export default paginaCanciones;