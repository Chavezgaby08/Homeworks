import { useState, useEffect } from "react";
import {pilaLibro} from "./pilaLibro";
import type {Libro} from "./pilaLibro";
import "./App.css";

function App() {

  const [pila] = useState(new pilaLibro());
  const [libros, setLibros] = useState<Libro[]>([]);

  const [formulario, setFormulario] = useState<Libro>({
    nombre: "",
    isbn: "",
    autor: "",
    editorial: ""
  });

  useEffect(() => {

    pila.push({
      nombre: "Clean Code",
      isbn: "123",
      autor: "Robert C. Martin",
      editorial: "Prentice Hall"
    });

    pila.push({
      nombre: "JavaScript Guide",
      isbn: "456",
      autor: "MDN",
      editorial: "Mozilla"
    });

    pila.push({
      nombre: "Eloquent JavaScript",
      isbn: "789",
      autor: "Marijn Haverbeke",
      editorial: "No Starch"
    });

    setLibros([...pila.print()]);

  }, []);

  const cambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const agregarLibro = () => {

    if (!formulario.nombre || !formulario.isbn || !formulario.autor || !formulario.editorial) {
      alert("Por favor, completa todos los campos");
      return;
    }

    pila.push(formulario);

    setLibros([...pila.print()]);

    setFormulario({
      nombre: "",
      isbn: "",
      autor: "",
      editorial: ""
    });
  };

  const eliminarLibro = () => {
    pila.pop();
    setLibros([...pila.print()]);
  };

  return (
    <div className="app-container">

      <h1 className="app-title">Pila de Libros</h1>

      <h2>Agregar Libro</h2>

      <input name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={cambio} />
      <input name="isbn" placeholder="ISBN" value={formulario.isbn} onChange={cambio} />
      <input name="autor" placeholder="Autor" value={formulario.autor} onChange={cambio} />
      <input name="editorial" placeholder="Editorial" value={formulario.editorial} onChange={cambio} />

      <br /><br />

      <button className="nav-buttons" onClick={agregarLibro}>Agregar</button>
      <button className="nav-buttons" onClick={eliminarLibro}>Eliminar último</button>

      <h2>Pila de Libros</h2>

      {libros.length === 0 && <p>No hay libros</p>}

      {libros.map((libro, index) => (
        <div key={index} style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px"
        }}>
          <p><strong>{libro.nombre}</strong></p>
          <p>ISBN: {libro.isbn}</p>
          <p>Autor: {libro.autor}</p>
          <p>Editorial: {libro.editorial}</p>
        </div>
      ))}

    </div>
  );
}

export default App;