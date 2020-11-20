import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import fire from 'firebase';

import { motion } from 'framer-motion';

import arrowImg from '../../assets/images/back-arrow.svg';

import './styles.css';


function DentistPage({ match }: RouteComponentProps){

  const db = fire.firestore();
  const [name, setName] = useState('');
  const [CRO, setCRO] = useState('');
  const [contact, setContact] = useState([]);
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [status, setStatus] = useState('');
  const [pacients, setPacients] = useState([]);

  const [weekDays, setWeekDays] = useState([]);

  var hash = window.location.hash.split("#").join('');


  useEffect(() =>{
    db.collection('dentists')
    .doc(hash)
    .get()
    .then((e:any) =>{
      setName(e.data().name.join(' '));
      setCRO(e.data().CRO);
      setContact(e.data().contact);
      setAddress(e.data().address);
      setProfileImage(e.data().image);
      setWeekDays(e.data().schedulers);
      setStatus(e.data().status);
    })

    db.collection('pacients')
    .limit(10)
    .where('dentist', '==', hash)
    .get()
    .then((e:any) =>{
      var data:any = []
      e.forEach((pacient:any) =>{
        var pac = {
          name: '',
          id: ''
        }
        pac.name = pacient.data().name.join(' ');
        pac.id = pacient.data().ID;
        data.push(pac);
      })
      setPacients(data);
    })
    //eslint-disable-next-line
  }, [])


  return (
    <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} id="page-dentist-page">
      <div className="top-buttons">
        <Link to="/painel/dentists">
          <img src={arrowImg} alt="arrowimg"/>Voltar
        </Link>
      </div>
      <div className="profile">
      <div className="profile-card">
        <div className="personal-info">
          <div className="column">
            <li><span>Nome:</span> {name}</li>
            <li><span>CRO:</span> {CRO}</li>
            {contact.map((number:string) =>{
              return <li><span>Contato:</span> {number}</li>
            })}
            <li><span>Endereço:</span> {address}</li>
          </div>
        </div>
        <div className="img-section">
            <img src={profileImage} alt="profile"/>
            <span>{status}</span>
        </div>
      </div>
      <div className="profile-info">
        <div className="comments">
          <div>
          <h3>Horários</h3>
          <button>Novo Horário</button>
          </div>
          <div className="comments-list">
            <div className="toprow">
              <li>Dia da semana</li>
              <li>Das</li>
              <li>Até</li>
            </div>
            {weekDays.map((e:any) =>{
              return (
              <div>
              <li>{e.week_day === "0"
              ? "Segunda-feira"
              : e.week_day === "1"
              ? "Terça-feira"
              : e.week_day === "2"
              ? "Quarta-feira"
              : e.week_day === '3'
              ? "Quinta-feira"
              : e.week_day === '4'
              ? "Sexta-feira"
              : e.week_day === '5'
              ? "Sábado"
              : null}</li>
              
              <li>{e.from}</li>
              <li>{e.to}</li>
              </div>
              )
            })}

          </div>
        </div>
        <div className="payments">
          <div>
          <h3>Pacientes</h3>
          </div>
          <div className="payments-list">
            {pacients.map((e:any) =>{
              return (
                <div>
                  <li>{e.id}</li>
                  <li>{e.name}</li>
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
      </div>
    </motion.div>
  );
}

export default DentistPage;