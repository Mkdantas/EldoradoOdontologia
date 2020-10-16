import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



function SideBar() {
  return (
    <div id="page-sidebar">
        <Link to="/pacients" className="sidebar-link">
            Pacientes
        </Link>
        <Link to="/dentists" className="sidebar-link">
            Dentistas
        </Link>
        <Link to="/schedule" className="sidebar-link">
            Agenda
        </Link>
        <Link to="/revenue" className="sidebar-link">
            Fluxo de caixa
        </Link>

        <a href="/" className="sidebar-link-bottom">
            Sair
        </a>
    </div>
  );
}

export default SideBar;