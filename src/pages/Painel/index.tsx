import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SideBar from '../../components/SideBar';

import Pacients from '../../pages/Pacients';
import Dentists from '../../pages/Dentists';

import './styles.css';
import Schedule from '../Schedule';
import Revenue from '../Revenue';
import WelcomeMessage from '../../components/Painel/WelcomeMessage';


function Painel() {
  return (
    <div id="page-painel">
        <BrowserRouter>
        <div className="sidebarPart">
        <Route component={SideBar}/>
        </div>
        <main>
        <Switch>
        <Route path="/painel" exact component={WelcomeMessage} />
        <Route path="/pacients" component={Pacients} />
        <Route path="/dentists" component={Dentists} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/revenue" component={Revenue} />
        </Switch>
        </main>
        </BrowserRouter>
    </div>
  );
}

export default Painel;