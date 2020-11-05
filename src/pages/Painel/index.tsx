import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SideBar from '../../components/SideBar';

import Pacients from '../../pages/Pacients';
import Dentists from '../../pages/Dentists';

import './styles.css';
import Schedule from '../Schedule';
import Revenue from '../Revenue';
import WelcomeMessage from '../../components/Painel/WelcomeMessage';
import PacientPage from '../PacientPage';
import { AnimatePresence } from 'framer-motion';


function Painel() {
  return (
    <div id="page-painel">
        <BrowserRouter>
        <div className="sidebarPart">
        <Route component={SideBar}/>
        </div>
        <main>  
        <AnimatePresence>    
        <Switch>
        <Route path="/painel" exact component={WelcomeMessage} />
        <Route path="/pacients" exact component={Pacients} />
        <Route path="/pacients/:id" component={PacientPage} />
        <Route path="/dentists" component={Dentists} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/revenue" component={Revenue} />
        </Switch>
        </AnimatePresence> 
        </main>
        </BrowserRouter>
    </div>
  );
}

export default Painel;