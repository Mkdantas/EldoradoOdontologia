import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Painel from './pages/Painel';
//

function Routes() {
    return(
        <AnimatePresence>
        <BrowserRouter>
        <Route path="/painel" component={Painel}/>
        <Route path="/" exact component={Landing}/>
        </BrowserRouter>
        </AnimatePresence>
    )
}

export default Routes;