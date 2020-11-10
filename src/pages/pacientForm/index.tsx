import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import arrowImg from '../../assets/images/back-arrow.svg';
import './styles.css';

const PacientForm = () =>{

    var todayDate = formatDate(new Date());
  const [date, setDate] = useState(todayDate);

  function formatDate(date:any) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }

    return(
        <div id="pacient-form-page">
            <div className="top-buttons">
                <Link to="/painel/pacients">
                    <img src={arrowImg} alt="arrowimg"/>Voltar
                </Link>
            </div>
            <div className="pacient-form-page-outer">
                <div className="title">
                    <h1>Cadastro de Pacientes</h1>
                </div> 
            <form className="pacient-form-page-inputs">
            <Input name="pacientID" label="ID do Paciente" />
            <Input name="pacientName" label="Nome do Paciente" />
            <Input name="pacientRG" label="RG do Paciente" />
            <Input name="pacientContact" label="Contato 1" />
            <Input name="pacientContact" label="Contato 2" />
            <Input name="pacientAddress" label="Endereço do Paciente" />
            <Input name="pacientStartDate" label="Data de Início" type="date" defaultValue={date}/>
            <Input name="pacientDentist" label="Dentista"/>
            <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
    )
}               
         
export default PacientForm;

