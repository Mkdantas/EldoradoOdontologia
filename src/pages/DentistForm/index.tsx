import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import arrowImg from '../../assets/images/back-arrow.svg';
import './styles.css';
import Select from '../../components/Select';

const DentistForm = () =>{

    const [selected, setSelected] = useState('');
    
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
        <div id="dentist-form-page">
            <div className="top-buttons">
                <Link to="/painel/dentists">
                    <img src={arrowImg} alt="arrowimg"/>Voltar
                </Link>
            </div>
            <div className="dentist-form-page-outer">
                <div className="title">
                    <h1>Cadastro de dentistas</h1>
                </div> 
            <form className="dentist-form-page-inputs">
            <Input name="dentistID" label="ID do dentista" />
            <Input name="dentistName" label="Nome do dentista" />
            <Input name="dentistRG" label="RG do dentista" />
            <Input name="dentistContact" label="Contato 1" />
            <Input name="dentistContact" label="Contato 2" />
            <Input name="dentistAddress" label="Endereço do dentista" />
            <h1>Agenda</h1>
            <div className="schedule-section">
            <Select name="dentistScheduleDay"
            label="Dia da semana"
            value={selected}
            onChange={ e =>{ setSelected(e.target.value)}}
            options={[
                { value: 'Segunda-feira', label: 'Segunda-feira'},
                { value: 'Terça-feira', label: 'Terça-feira'},
                { value: 'Quarta-feira', label: 'Quarta-feira'},
                { value: 'Quinta-feira', label: 'Quinta-feira'},
                { value: 'Sexta-feira', label: 'Sexta-feira'},
                { value: 'Sábado', label: 'Sábado'}
            ]}  
            />
            <Input name="dentistScheduleTimeStart" label="Início" type="time" defaultValue={date}/>
            <Input name="dentistScheduleTimeEnd" label="Término" type="time" defaultValue={date}/>
            </div>
            <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
    )
}

export default DentistForm;

