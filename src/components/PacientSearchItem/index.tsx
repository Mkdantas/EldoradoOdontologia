import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/*export interface Pacient{
    id: string;
    name: string;
    avatar: string;
    pacientResponsible?: string;
    lastAppointment?: string;
    contact: Array<string>;

}
*/

interface Pacient{
    id: string;
    name: string;
    avatar: string;
    pacientResponsible?: string;
    dentista: string;
    contact: Array<string>;
}

const PacientSearchItem: React.FC<Pacient> = (pacient) => {
  return (
    <article id="page-item">
      <header>
        <img src={pacient.avatar} alt={pacient.name}/>
        <div>
          <div className="first-info">
            <strong>ID: {pacient.id}</strong>
            <strong>Nome: {pacient.name}</strong>
            <p>Paciente</p>
          </div>
          <div className="second-info">
            <span> Responsável: {pacient.pacientResponsible}</span>
            {pacient.contact.map(contact =>{
              return <span>Contato: {contact}</span>
            })}
            </div>
        </div>
      </header>
      <footer>
        <p>
          Dentista: {pacient.dentista}
          <Link  className="linkbutton" to={`/painel/pacients/pacient#${pacient.id}`}>
            {localStorage.setItem('pacientID', pacient.id)}
            <button>Ver mais</button>
          </Link>
        </p>
      </footer>
    </article>
  );
}

export default PacientSearchItem;