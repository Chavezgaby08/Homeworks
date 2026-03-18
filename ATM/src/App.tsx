import { useState, useEffect } from "react";
import { Cola } from "./Cola";
import type { Persona } from "./Cola";

function App() {

  const [cola] = useState(new Cola());
  const [personas, setPersonas] = useState<Persona[]>([]);

  const [formulario, setFormulario] = useState({
    nombre: "",
    cantidad: ""
  });

  useEffect(() => {

    cola.enqueue({
      nombre: "Juan",
      cantidad: 100,
      fecha: new Date()
    });

    cola.enqueue({
      nombre: "María",
      cantidad: 200,
      fecha: new Date()
    });

    cola.enqueue({
      nombre: "Carlos",
      cantidad: 50,
      fecha: new Date()
    });

    setPersonas([...cola.print()]);

  }, []);

  const cambiar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const agregarPersona = () => {

    if (!formulario.nombre || !formulario.cantidad) {
      alert("Completa todos los campos");
      return;
    }

    const nuevaPersona: Persona = {
      nombre: formulario.nombre,
      cantidad: Number(formulario.cantidad),
      fecha: new Date()
    };

    cola.enqueue(nuevaPersona);

    setPersonas([...cola.print()]);

    setFormulario({
      nombre: "",
      cantidad: ""
    });
  };

  const atenderPersona = () => {
    cola.dequeue();
    setPersonas([...cola.print()]);
  };

  const ordenarPersonas = [...personas].sort(
    (a, b) => a.fecha.getTime() - b.fecha.getTime()
  );

  return (
    <div>

      <h1>Fila del Cajero</h1>

      <h2>Agregar Persona</h2>

      <input
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={cambiar}
      />

      <input
        name="cantidad"
        type="number"
        placeholder="Monto"
        value={formulario.cantidad}
        onChange={cambiar}
      />

      <br /><br />

      <button onClick={agregarPersona}>Agregar</button>
      <button onClick={atenderPersona}>Atender</button>

      <h2>Personas en la fila</h2>

      {ordenarPersonas.map((person, index) => (
        <div key={index} style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px"
        }}>
          <p><strong>{person.nombre}</strong></p>
          <p>Monto: ${person.cantidad}</p>
          <p>Fecha: {person.fecha.toLocaleTimeString()}</p>
        </div>
      ))}

    </div>
  );
}

export default App;