import type { Contact } from "../App";
import ContactItem from "./ContactItem";
import type { JSX } from "react";

interface Props {
  contacts: Contact[];
  deleteContact: (id: number) => void;
}

function ContactList({ contacts, deleteContact }: Props): JSX.Element {
  return (
    <>
      <h2>Lista de Contactos</h2>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </>
  );
}

export default ContactList;