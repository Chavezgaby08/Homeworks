import { useState, useEffect } from "react";
import { SimpleLinkedList } from "./estructuras/SimpleLinkedList";
import { DoubleLinkedList } from "./estructuras/DoubleLinkedList";
import { CircularList } from "./estructuras/CircularList";
import { DoubleCircularList, DoubleCircularNode } from "./estructuras/DoubleCircularList";
import "./App.css";

function App() {

  //const [listaDeEspera] = useState(new SimpleLinkedList<string>());
  const [listaDeEspera] = useState(() => {
  const list = new SimpleLinkedList<string>();
  list.append("Paciente 1");
  list.append("Paciente 2");
  list.append("Paciente 3");
  list.append("Paciente 4");
  list.append("Paciente 5");
  list.append("Paciente 6");
  return list;
});
  const [listaHistorial] = useState(new DoubleLinkedList<string>());
  const [pacientes, setPacientes] = useState<string[]>([]);

  const [listaDoctor] = useState(new CircularList<string>());
  const [currentDoctor, setDoctorActual] = useState<string>("");

  const [listaComite] = useState(new DoubleCircularList<string>());
  const [miembroActual, setMiembroActual] =
    useState<DoubleCircularNode<string> | null>(null);

  useEffect(() => {

    setPacientes(listaDeEspera.getAll());

    listaDoctor.append("Dr. Chavez");
    listaDoctor.append("Dra. Aguilera");
    listaDoctor.append("Dr. Delgado");

    if (listaDoctor.head !== null) {
      setDoctorActual(listaDoctor.head.value);
    }

    listaComite.append("Director General");
    listaComite.append("Jefe Médico");
    listaComite.append("Administrador");
    listaComite.append("Coordinador");

    if (listaComite.head !== null) {
      setMiembroActual(listaComite.head);
    }

  }, []);

  useEffect(() => {

    const intervalo = setInterval(() => {

      if (listaDoctor.head !== null) {
        listaDoctor.head = listaDoctor.head.next!;
        setDoctorActual(listaDoctor.head.value);
      }

    }, 10000);

    return () => clearInterval(intervalo);

  }, []);

  const atenderPaciente = () => {

    const atendido = listaDeEspera.removeFirst();

    if (atendido !== null) {
      listaHistorial.append(atendido);
      setPacientes(listaDeEspera.getAll());
    }
  };

  const siguienteMiembro = () => {
    if (miembroActual !== null) {
      setMiembroActual(miembroActual.next);
    }
  };

  const miembroAnterior = () => {
    if (miembroActual !== null) {
      setMiembroActual(miembroActual.prev);
    }
  };

  return (
    <div className="app-container">

      <h1>Sistema Clínica</h1>

      <h2>Médico de Guardia</h2>
      <p>{currentDoctor}</p>

      <h2>Pacientes en Espera</h2>
      {pacientes.map((p, index) => (
        <p key={index}>{p}</p>
      ))}

      <div className="action-buttons ">
        <button className="next-btn" onClick={atenderPaciente}>
        Atender Paciente
      </button>
      </div>

      <h2>Historial de Atención</h2>
      {listaHistorial.getAll().map((p, index) => (
        <p key={index}>{p}</p>
      ))}

      <h2>Comité Administrativo</h2>
      <p>{miembroActual?.value}</p>

      <div className="nav-buttons">
        <button onClick={miembroAnterior}>Anterior</button>
        <button onClick={siguienteMiembro}>Siguiente</button>
      </div>

    </div>
  );
}

export default App;