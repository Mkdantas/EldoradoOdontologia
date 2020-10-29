import React, { useState } from 'react';

import './styles.css';




function Revenue() {


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
  

var todayDate = formatDate(new Date());

const [date, setDate] = useState(todayDate);

  return (
    <div id="page-revenue">
      <div className="expenses">
        <div className="expense-area">
        </div>
        <div className="expense-totals">
          <div>
          <h3>Total de Saídas:</h3>
          <h3>Total de Entradas:</h3>
          <h1>Final:</h1>
          </div>
          <div>
          <h3>23133</h3>
          <h3>21312</h3>
          <h1>1233</h1>
          </div>

        </div>
      </div>
      <div className="button-area">
        <div className="button-add">
        <button>
          + Entrada
        </button>
        <button>
          + Saída
        </button>
        </div>
        <div className="button-date">
        <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
        <button>
          Trocar data
        </button>
        </div>
      </div>
    </div>
  );
}

export default Revenue;