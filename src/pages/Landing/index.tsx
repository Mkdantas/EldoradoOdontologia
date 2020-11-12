import React, { useEffect, useState } from 'react';

import LoginForm from '../../components/LoginForm';
import fire from '../../fire';
import { motion } from 'framer-motion';
import './styles.css';


import logoImg from '../../assets/images/logo.webp';
import { Redirect } from 'react-router-dom';



function Landing() {

  const [isLoading, setIsLoading] = useState(false);

  //login auth;

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () =>{
    setEmail('');
    setPasswordError('');
  }

  const clearErrors = () =>{
    setPasswordError('');
    setEmailError('');
  }

  const handleLogin = (e:any) =>{
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err =>{
        switch(err.code){
          case "auth/invalid-email":
            setEmailError('E-mail inválido');
          break;
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError('Usuário não existe!');
          break;
          case "auth/wrong-password":
            setPasswordError('Senha errada');
          break;
        }
      })
  }

  

  useEffect(() =>{
    const authListener = () =>{
      fire.auth().onAuthStateChanged((user:any) =>{
        if(user){
          clearInputs();
          
          setIsLoading(true);
          setTimeout(e =>{
          setUser(user);;
          }, 1000)
        } else {
          setUser('');
        }
      })
    }
    authListener();
  }, []);


  return (
    <div id="page-landing">
        <motion.div layout transition={{type: "spring",
                    stiffness: 50,
                    damping: 20,
                  }}
        data-isloading={isLoading} className="image-frame">
        <img src={logoImg} alt="Logo"/>
        </motion.div>

        <main className="loginLanding" data-isloading={isLoading}>
         <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          emailError={emailError}
          passwordError={passwordError}
         />
        </main>
        {user ? <Redirect to="/painel"/> : null}
    </div>
  );
}

export default Landing;
