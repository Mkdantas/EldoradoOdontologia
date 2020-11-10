import React from 'react';
import DentistSearchItem from '../../components/DentistSearchItem';
import SearchHeader from '../../components/SearchHeader';
import { motion } from 'framer-motion';

import logoImg from '../../assets/images/articles_1.jpg';

import './styles.css';
import { Link } from 'react-router-dom';


function Dentists() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} id="page-dentists">
      <div className="search-header">
        <SearchHeader title="Lista de Dentistas"/>
        </div>
        <div className="top-bar">
          <h3>100 Dentistas encontrados!</h3>
          <Link to="/painel/new-dentist">
          <button>Adicionar Novo</button>
          </Link>
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
    </motion.div>
  );
}

export default Dentists;