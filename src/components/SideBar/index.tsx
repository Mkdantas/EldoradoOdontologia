import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import fire from 'firebase';

import logoutImg from '../../assets/images/logout.svg';
import dentistImg from '../../assets/images/dentist.svg';
import dentistGreenImg from '../../assets/images/dentistGreen.svg';
import pacientImg from '../../assets/images/pacient.svg';
import pacientGreenImg from '../../assets/images/pacientGreen.svg';
import cashFlowImg from '../../assets/images/dollar.svg';
import cashFlowGreenImg from '../../assets/images/dollarGreen.svg';
import calendarImg from '../../assets/images/calendar.svg';
import calendarGreenImg from '../../assets/images/calendarGreen.svg';



function SideBar() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname.split('/')[2]);

    const handleLogout = () =>{
      fire.auth().signOut();
    }
    
  return (
    <div id="page-sidebar">
        <Link to="/painel/pacients" onClick={() => setCurrentPage('pacients')} className={currentPage === 'pacients' ? 'selected' : 'sidebar-link'}>
        <img src={currentPage === 'pacients' ? pacientGreenImg : pacientImg} alt="Pacient"/> Pacientes
        </Link>
        <Link to="/painel/dentists"  onClick={() => setCurrentPage('dentists')} className={currentPage === 'dentists' ? 'selected' : 'sidebar-link'}>
        <img src={currentPage === 'dentists' ? dentistGreenImg: dentistImg} alt="Dentist"/> Dentistas
        </Link>
        <Link to="/painel/schedule"  onClick={() => setCurrentPage('schedule')} className={currentPage === 'schedule' ? 'selected' : 'sidebar-link'}>
        <img src={currentPage === 'schedule' ? calendarGreenImg : calendarImg} alt="calendar"/> Agenda
        </Link>
        <Link to="/painel/revenue" onClick={() => setCurrentPage('revenue')} className={currentPage === 'revenue' ? 'selected' : 'sidebar-link'}>
        <img src={currentPage === 'revenue' ? cashFlowGreenImg : cashFlowImg} alt="cashFlow"/> Fluxo de caixa
        </Link>
        <a href="/" onClick={handleLogout} className="sidebar-link-bottom">
           <img src={logoutImg} alt="logout"/> Sair
        </a>
    </div>
  );
}

export default SideBar;