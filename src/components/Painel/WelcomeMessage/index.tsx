import React from 'react';

import logoImg from '../../../assets/images/logo.webp';

import './styles.css';


function WelcomeMessage() {
  return (
    <div id="page-welcomemessage">
        <h1>Bem-vindo Matheus</h1>
        <img src={logoImg} alt="logo" />
    </div>
  );
}

export default WelcomeMessage;