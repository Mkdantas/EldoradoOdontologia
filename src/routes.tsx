import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Painel from './pages/Painel';
//

function Routes() {
    return(
        <BrowserRouter>
        <Route path="/painel" exact component={Painel}/>
        <Route path="/" exact component={Landing}/>
        </BrowserRouter>
    )
}

export default Routes;