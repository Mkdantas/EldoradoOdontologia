import React from 'react';
import DentistSearchItem from '../../components/DentistSearchItem';
import SearchHeader from '../../components/SearchHeader';

import logoImg from '../../assets/images/articles_1.jpg';

import './styles.css';


function Dentists() {
  return (
    <div id="page-dentists">
      <div className="search-header">
        <SearchHeader title="Lista de Dentistas"/>
        </div>
        <main>
          <DentistSearchItem
            id="11457"
            name="Fatima Lima"
            daysWorked={['Segunda-feira', 'Quarta-feira', 'Sexta-feira']}
            contact={['11949012852', '11575791257']}
            avatar={logoImg}
            />
            <DentistSearchItem
            id="11457"
            name="Fatima Lima"
            daysWorked={['Segunda-feira', 'Quarta-feira', 'Sexta-feira']}
            contact={['11949012852', '11575791257']}
            avatar={logoImg}
            />
            <DentistSearchItem
            id="11457"
            name="Fatima Lima"
            daysWorked={['Segunda-feira', 'Quarta-feira', 'Sexta-feira']}
            contact={['11949012852', '11575791257']}
            avatar={logoImg}
            />
        </main>
    </div>
  );
}

export default Dentists;