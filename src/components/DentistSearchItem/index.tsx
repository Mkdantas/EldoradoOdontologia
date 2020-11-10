import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/*export interface Dentist{
    id: string;
    name: string;
    avatar: string;
    pacientResponsible?: string;
    lastAppointment?: string;
    contact: Array<string>;

}
*/

interface Dentist{
    id: string;
    name: string;
    avatar: string;
    contact: Array<string>;
    daysWorked: Array<string>;
}

const DentistSearchItem: React.FC<Dentist> = (Dentist) => {
  return (
    <article id="page-item-dentists">
      <header>
        <img src={Dentist.avatar} alt={Dentist.name}/>
        <div>
          <div className="first-info">
            <strong>ID: {Dentist.id}</strong>
            <strong>Nome: {Dentist.name}</strong>
            <p>Dentista</p>
          </div>
          <div className="second-info">
            {Dentist.contact.map(contact =>{
              return <span>Contato: {contact}</span>
            })}
            </div>
        </div>
      </header>
      <footer>
        <div>
      {Dentist.daysWorked.map( day =>{
            return <button>{day}</button>
          })}
          </div>
        <p>
          <Link  className="linkbutton" to={`/painel/dentists/${Dentist.id}`}>
            <button>Ver mais</button>
          </Link>
        </p>
      </footer>
    </article>
  );
}

export default DentistSearchItem;