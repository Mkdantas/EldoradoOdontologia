import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { motion } from 'framer-motion';

import arrowImg from '../../assets/images/back-arrow.svg';
import sampleImg from '../../assets/images/example.jpg';

import './styles.css';


function DentistPage({ match }: RouteComponentProps){
  console.log(match);
  return (
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} id="page-dentist-page">
      <div className="top-buttons">
        <Link to="/painel/dentists">
          <img src={arrowImg} alt="arrowimg"/>Voltar
        </Link>
      </div>
      <div className="profile">
      <div className="profile-card">
        <div className="personal-info">
          <div className="column">
            <li><span>Nome:</span> Matheus Wilson Soares Dantas</li>
            <li><span>RG:</span> 53.164.470-8</li>
            <li><span>Data de Nascimento:</span> 23/08/1997 (23 Anos)</li>
            <li><span>Contato 1:</span> (11)94901-2852</li>
            <li><span>Contato 2:</span> (11)94901-2852</li>
            <li><span>Endereço:</span> Maria Rita Assunção Ferreira, 109 - Jd Silvio Sampaio, Taboão da Serra - 06773330</li>
          </div>
        </div>
        <div className="img-section">
            <img src={sampleImg} alt="profile"/>
            <span>Ativo</span>
        </div>
      </div>
      <div className="profile-info">
        <div className="comments">
          <div>
          <h3>Horários</h3>
          <button>Novo Horário</button>
          </div>
          <div className="comments-list">

          </div>
        </div>
        <div className="payments">
          <div>
          <h3>Pacientes</h3>
          </div>
          <div className="payments-list">

          </div>
        </div>
        
      </div>
      </div>
    </motion.div>
  );
}

export default DentistPage;