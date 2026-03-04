import { useState } from "react";
import type { JSX } from "react";

interface Props {
  addContact: (nombre: string, telefono: string) => void;
}

function AddContact({ addContact }: Props): JSX.Element {
  const [nombre, setNombre] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre || !telefono) {
      alert("Todos los campos son obligatorios");
      return;
    }

    addContact(nombre, telefono);
    setNombre("");
    setTelefono("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNombre(e.target.value)
        }
      />
      <input
        type="text"
        placeholder="Telefono"
        value={telefono}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTelefono(e.target.value)
        }
      />
      <button type="submit" className="add-btn">Add Contact</button>
    </form>
  );
}

export default AddContact;