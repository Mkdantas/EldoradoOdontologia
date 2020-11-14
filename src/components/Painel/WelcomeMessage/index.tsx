import React from 'react';

import logoImg from '../../../assets/images/logo.webp';

import './styles.css';


function WelcomeMessage() {
  // var user = localStorage.getItem('userEmail');
  // var userName= user ? user.split('@')[0].split('.')[0].split('_')[0].split('-')[0].charAt(0) : '';
  // var finalUserName = [userName?.toUpperCase(), user?.split('@')[0].split('.')[0].split('_')[0].split('-')[0]];
  

  return (
    <div id="page-welcomemessage">
        <h1>Bem-vindo</h1>
        <img src={logoImg} alt="logo" />
    </div>
  );
}

export default WelcomeMessage;