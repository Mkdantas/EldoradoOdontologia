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
import { AnimatePresence, motion } from 'framer-motion';
import PacientForm from '../PacientForm';
import DentistForm from '../DentistForm';
import DentistPage from '../DentistPage';

   
function Painel() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} id="page-painel">
        <BrowserRouter>
        <div className="sidebarPart">
        <Route component={SideBar}/>
        </div>
        <main>  
        <AnimatePresence>    
        <Switch>
        <Route path="/painel" exact component={WelcomeMessage} />
        <Route path="/painel/pacients" exact component={Pacients} />
        <Route path="/painel/pacients/:id" component={PacientPage} />
        <Route path="/painel/dentists/:id" component={DentistPage} />
        <Route path="/painel/new-pacient" component={PacientForm} />
        <Route path="/painel/new-dentist" component={DentistForm} />
        <Route path="/painel/dentists" component={Dentists} />
        <Route path="/painel/schedule" component={Schedule} />
        <Route path="/painel/revenue" component={Revenue} />
        </Switch>
        </AnimatePresence> 
        </main>
        </BrowserRouter>
    </motion.div>
  );
}

export default Painel;