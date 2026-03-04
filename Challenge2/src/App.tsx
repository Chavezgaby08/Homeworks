import { useState, useEffect } from 'react'
import Loader from './Componentes/Loader'
import ContactList from './Componentes/ContactList'
import AddContact from './Componentes/AddContact'
import './App.css'

export interface Contact {
  id: number
  nombre: string
  telefono: string
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setContacts([
        { id: 1, nombre: 'Gaby', telefono: '3001234567' },
        { id: 2, nombre: 'Juan', telefono: '3019876543' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const addContact = (nombre: string, telefono: string): void => {
    const newContact: Contact = {
      id: Date.now(),
      nombre,
      telefono
    };

    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = (id: number): void => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  }

  return (
    <>
      <div className="app-container">
        <h1>Contact Manager</h1>
        {loading ? (
          <Loader />
        ) : (
          <>
            <AddContact addContact={addContact} />
            <ContactList contacts={contacts} deleteContact={deleteContact} />
          </>
        )}
      </div>
    </>
  )
}

export default App
