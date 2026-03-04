import type { Contact } from "../App";
import type { JSX } from "react";

interface Props {
  contact: Contact;
  deleteContact: (id: number) => void;
}

function ContactItem({ contact, deleteContact }: Props): JSX.Element {
  return (
    <div className="contact-card">
      <p>
        {contact.nombre} - {contact.telefono}
      </p>
      <button className="delete-btn" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </div>
  );
}

export default ContactItem;