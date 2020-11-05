import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './styles.css';


function PacientPage({ match }: RouteComponentProps){
  console.log(match);
  return (
    <div id="page-pacient-page">
    </div>
  );
}

export default PacientPage;