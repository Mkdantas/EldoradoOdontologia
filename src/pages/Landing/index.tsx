import React, { useState } from 'react';

import LoginForm from '../../components/LoginForm';

import { motion } from 'framer-motion';

import './styles.css';


import logoImg from '../../assets/images/logo.webp';
import { Redirect } from 'react-router-dom';



function Landing() {

  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);


  window.addEventListener('submit', e =>{
    setIsLoading(true);
    setTimeout(e =>{
      setLoaded(true);
    }, 1000)
  })

  

  return (
    <div id="page-landing">
        <motion.div layout transition={{type: "spring",
                    stiffness: 50,
                    damping: 20,
                  }}
  data-isLoading={isLoading} className="image-frame">
        <img src={logoImg} alt="Logo" onClick={e => setIsLoading(!isLoading)} />
        </motion.div>

        <main className="loginLanding" data-isLoading={isLoading}>
         <LoginForm />
        </main>
        {loaded ? <Redirect to="/painel"/> : null}
    </div>
  );
}

export default Landing;
