import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



function SideBar() {
    const [currentPage, setCurrentPage] = useState('');
    
  return (
    <div id="page-sidebar">
        <Link to="/pacients" onClick={() => setCurrentPage('pacients')} className={currentPage === 'pacients' ? 'selected' : 'sidebar-link'}>
            Pacientes
        </Link>
        <Link to="/dentists"  onClick={() => setCurrentPage('dentists')} className={currentPage === 'dentists' ? 'selected' : 'sidebar-link'}>
            Dentistas
        </Link>
        <Link to="/schedule"  onClick={() => setCurrentPage('schedule')} className={currentPage === 'schedule' ? 'selected' : 'sidebar-link'}>
            Agenda
        </Link>
        <Link to="/revenue" onClick={() => setCurrentPage('revenue')} className={currentPage === 'revenue' ? 'selected' : 'sidebar-link'}>
            Fluxo de caixa
        </Link>
        <a href="/" className="sidebar-link-bottom">
            Sair
        </a>
    </div>
  );
}

export default SideBar;