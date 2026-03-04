import { useState } from "react";
import { DoubleLinkedList, DoubleNode } from "../Estructuras/DoubleLinkedList";

function paginaNavegador() {
  const [lista] = useState(() => {
    const historial = new DoubleLinkedList<string>();
    historial.append("google.com");
    historial.append("youtube.com");
    historial.append("github.com");
    return historial;
  });

  const [current, setCurrent] = useState<DoubleNode<string> | null>(lista.head);

  const irSiguiente = () => {
    if (current?.siguiente) {
      setCurrent(current.siguiente);
    }
  };

  const irAnterior = () => {
    if (current?.anterior) {
      setCurrent(current.anterior);
    }
  };

  return (
    <div className="card">
      <h2>Historial del Navegador (Double Linked List)</h2>
      <p>Pagina actual: {current?.valor}</p>

      <div className="action-buttons">
        <button className="back-btn" onClick={irAnterior}>
          ⬅ Atrás
        </button>
        <button className="next-btn" onClick={irSiguiente}>
          Adelante ➡
        </button>
      </div>
    </div>
  );
}

export default paginaNavegador;