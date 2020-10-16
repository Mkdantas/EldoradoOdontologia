import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import SideBar from '../../components/SideBar';

import Pacients from '../../pages/Pacients';
import Dentists from '../../pages/Dentists';

import './styles.css';
import Schedule from '../Schedule';
import Revenue from '../Revenue';


function Painel() {
  return (
    <div id="page-painel">
        <BrowserRouter>
        <Route component={SideBar}/>
        <main>
        <Switch>
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