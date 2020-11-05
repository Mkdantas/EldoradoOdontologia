import React from 'react';
import SearchHeader from '../../components/SearchHeader';
import PacientSearchItem from '../../components/PacientSearchItem';
import { motion } from 'framer-motion';

import logoImg from '../../assets/images/articles_1.jpg';

import './styles.css';


function Pacients() {
  return (
    <motion.div initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} id="page-pacients">
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
    </motion.div>
  );
}

export default Pacients;