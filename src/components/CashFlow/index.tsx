import React from 'react';

import './styles.css';

import entry from '../../assets/images/increase.png';
import exit from '../../assets/images/decrease.png';

interface CashFlowProps{
    type: string;
    name: string;
    value: number;
    date?: string;
    id: string;
}


const CashFlow: React.FC<CashFlowProps> = ({type, name, value, date, id}) => {
    return(
        <div className={type}>
            <img src={type === 'exit'? exit : entry} alt={`cash${type}`} />
            <div className="type">{type === 'exit'? 'Saída' : 'Entrada'}</div>
            <div className="name">{name}</div>
            <div className="value">R$ {value}</div>
            <div className="id">Paciente: {id}</div>
            <div className="date">{date}</div>
        </div>
    )
}

export default CashFlow;