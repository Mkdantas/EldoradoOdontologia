import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import fire from 'firebase';

import Landing from './pages/Landing';
import Painel from './pages/Painel';
import PrivateRoute from './PrivateRoute';
//

function Routes() {
    const [loggedIn, setLoggedIn] = useState('');

    const authListener = () =>{
        fire.auth().onAuthStateChanged((user:any) =>{
          if(user){            
            setLoggedIn(user);
          } else {
            setLoggedIn('');
          }
        })
      }
    
      useEffect(() =>{
        authListener();
      }, [loggedIn]);      
    return(
        <AnimatePresence>
        <BrowserRouter>
        <PrivateRoute path='/painel' loggedIn={loggedIn} component={Painel}/> 
        <Route path="/" exact component={Landing}/>
        </BrowserRouter>
        </AnimatePresence>
    )
}

export default Routes;