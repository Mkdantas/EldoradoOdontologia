import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

/*export interface Dentist{
    id: string;
    name: string;
    avatar: string;
    pacientResponsible?: string;
    lastAppointment?: string;
    contact: Array<string>;

}
*/

interface Dentist {
  id?: string;
  name: string;
  avatar: string;
  contact: Array<string>;
  daysWorked: any;
  CRO: string;
}

const DentistSearchItem: React.FC<Dentist> = (Dentist) => {
  return (
    <article id="page-item-dentists">
      <header>
        <img src={Dentist.avatar} alt={Dentist.name} />
        <div>
          <div className="first-info">
            <strong>Nome: {Dentist.name}</strong>
            <p>Dentista</p>
            <p>CRO: {Dentist.CRO}</p>
          </div>
          <div className="second-info">
            {Dentist.contact.map((contact) => {
              return <span>Contato: {contact}</span>;
            })}
          </div>
        </div>
      </header>
      <footer>
        <div>
          {Dentist.daysWorked.map((day: any) => {
            return (
              <button>
                {day.week_day === "0"
                  ? "Segunda-feira"
                  : day.week_day === "1"
                  ? "Terça-feira"
                  : day.week_day === "2"
                  ? "Quarta-feira"
                  : day.week_day === '3'
                  ? "Quinta-feira"
                  : day.week_day === '4'
                  ? "Sexta-feira"
                  : day.week_day === '5'
                  ? "Sábado"
                  : null}
              </button>
            );
          })}
        </div>
        <p>
          <Link className="linkbutton" to={`/painel/dentists/dentist#${Dentist.id}`}>
            <button>Ver mais</button>
          </Link>
        </p>
      </footer>
    </article>
  );
};

export default DentistSearchItem;
