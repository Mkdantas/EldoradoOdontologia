import React from 'react';

import LoginForm from '../../components/LoginForm';

import './styles.css';


import logoImg from '../../assets/images/logo.webp';


function Landing() {
  return (
    <div id="page-landing">
        <div className="image-frame">
        <img src={logoImg} alt="Logo"/>
        </div>

        <main>
         <LoginForm />
        </main>
    </div>
  );
}

export default Landing;
