import React from 'react';
import SearchHeader from '../../components/SearchHeader';
import PacientSearchItem from '../../components/PacientSearchItem';

import logoImg from '../../assets/images/articles_1.jpg';

import './styles.css';


function Pacients() {
  return (
    <div id="page-pacients">
      <div className="search-header">
      <SearchHeader  title=" Lista de Pacientes"/>
      </div>
      <main>
        <PacientSearchItem
         id="12678"
         name="Ana Carolina Dantas"
         avatar={logoImg}
         contact={['11949012852', '11986555432']}
         dentista="Fátima Lima"
         pacientResponsible="Elza Soares de Oliveira"
         />
         <PacientSearchItem
         id="12678"
         name="Ana Carolina Dantas"
         avatar={logoImg}
         contact={['11949012852', '11986555432']}
         dentista="Fátima Lima"
         pacientResponsible="Elza Soares de Oliveira"
         />
         <PacientSearchItem
         id="12678"
         name="Ana Carolina Dantas"
         avatar={logoImg}
         contact={['11949012852', '11986555432']}
         dentista="Fátima Lima"
         pacientResponsible="Elza Soares de Oliveira"
         />
         <PacientSearchItem
         id="12678"
         name="Ana Carolina Dantas"
         avatar={logoImg}
         contact={['11949012852', '11986555432']}
         dentista="Fátima Lima"
         pacientResponsible="Elza Soares de Oliveira"
         />
      </main>
    </div>
  );
}

export default Pacients;