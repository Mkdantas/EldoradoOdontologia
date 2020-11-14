import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './styles.css';


function submitConfirmed() {
  // var user = localStorage.getItem('userEmail');
  // var userName= user ? user.split('@')[0].split('.')[0].split('_')[0].split('-')[0].charAt(0) : '';
  // var finalUserName = [userName?.toUpperCase(), user?.split('@')[0].split('.')[0].split('_')[0].split('-')[0]];
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} id="page-submit-confirmed">
        <h1>Cadastro realizado com sucesso!</h1>
        <Link to={`/painel/pacients/pacient${window.location.hash}`}>
        <button> Clique aqui para visualizar </button>
        </Link>
    </motion.div>
  );
}

export default submitConfirmed;