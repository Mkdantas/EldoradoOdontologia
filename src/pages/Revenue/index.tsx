import React, { useState } from 'react';
import CashFlow from '../../components/CashFlow';

import './styles.css';


import entryImg from '../../assets/images/increase.png';
import exitImg from '../../assets/images/decrease.png';
import totalImg from '../../assets/images/money.png';
import { Modal, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


function Revenue() {

  let [entry, setEntry] = useState(0);
  let [exit, setExit] = useState(0);
  let [transactions, setTransactions] = useState([{type: 'entry', name: '', value: 0, date: '', id: ''}]);

  const [addTransaction, setAddTransaction] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  var todayDate = formatDate(new Date());
  const [date, setDate] = useState(todayDate);

  let pacientID = '';
  let transactionValue = '';
  let transactionName = '';


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

  const  openModal = (e:string) =>{
    setShow(true);
    setAddTransaction(e);
  }
  

  const handleTransaction = () =>{
    setTransactions([
      ...transactions,
      {
      type: addTransaction,
      name: transactionName,
      value: Number(transactionValue.replace(',','.')),
      id: pacientID,
      date: date
    }])
    if(addTransaction == 'entry'){
    setEntry(entry + Number(transactionValue.replace(',','.')))
    } else if(addTransaction == 'exit'){
    setExit(exit + Number(transactionValue.replace(',','.')))
    }
    setShow(false);
  }

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Entrada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={() => handleTransaction()}>
            <Form.Group>
              <Form.Label>Código do Paciente</Form.Label>
              <Form.Control
                size="lg"
                className="pacientID"
                type="text"
                onChange={(e) => pacientID = e.target.value}
                required
              />
            </Form.Group>
            <Form.Control
                size="lg"
                className="pacientID"
                type="text"
                onChange={(e) => transactionName = e.target.value}
                required
              />
            <Form.Group>
              <Form.Label>Valor</Form.Label>
              <Form.Control
                size="lg"
                className="pacientName"
                type="text"
                onChange={(e) => transactionValue = e.target.value}
                required
              />
            </Form.Group>
            <Button variant={addTransaction === 'entry' ? 'success' : 'danger'} size="lg" type="submit">
              {addTransaction === 'entry' ? 'Entrada' : 'Saída'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };



  return (
    <motion.div initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} id="page-revenue">
      {show ? <ModalContent /> : null}
      <div className="expenses">
        <div className="expense-area">
          {transactions.map((transaction) =>{
            return <CashFlow type={transaction.type} name={transaction.name} value={transaction.value} date={transaction.date} id={transaction.id}/>
          })}
        </div>
        <div className="expense-totals">
          <div>
          <h3><img src={exitImg} alt="cashExit"/>Total de Saídas:</h3>
          <h3><img src={entryImg} alt="cashEntry"/>Total de Entradas:</h3>
          <h1><img src={totalImg} alt="cashTotal"/>Final:</h1>
          </div>
          <div>
          <h3>R$ {exit}</h3>
          <h3>R$ {entry}</h3>
          <h1>R$ {entry - exit}</h1>
          </div>

        </div>
      </div>
      <div className="button-area">
        <div className="button-add">
        <button onClick={()=>openModal('entry')}>
          + Entrada
        </button>
        <button onClick={()=>openModal('exit')}>
          + Saída
        </button>
        </div>
        <div className="button-date">
        <input type="date" value={date} onChange={e => setDate(e.target.innerText)}/>
        <button>
          Trocar data
        </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Revenue;