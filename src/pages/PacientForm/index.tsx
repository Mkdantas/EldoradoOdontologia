import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import fire from "firebase";
import Input from "../../components/Input";

import { motion } from "framer-motion";

import arrowImg from "../../assets/images/back-arrow.svg";
import "./styles.css";

const PacientForm = () => {
  const db = fire.firestore();

  var todayDate = formatDate(new Date());
  const randomID = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  //eslint-disable-next-line
  const [ID, setID] = useState(randomID());
  const [name, setName] = useState("");
  const [RG, setRG] = useState("");
  const [birth, setBirth] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [validate, setValidate] = useState('');
  //eslint-disable-next-line
  const [contact, setContact] = useState([""]);
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState("");
  //eslint-disable-next-line
  const [startDate, setStartDate] = useState(todayDate);
  const [dentist, setDentist] = useState("");

  function formatDate(date: any) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const addPacient = (e: any) => {
    e.preventDefault();


    if(name &&
        RG &&
        birth &&
        contact &&
        address &&
        dentist &&
        startDate &&
        ID){
    db.collection("pacients")
      .add({
        name: name.split(' '),
        RG,
        birth,
        contact,
        address,
        dentist,
        startDate,
        id: ID,
        status: "active",
        image: profileImage,
      })
      .then(function (docRef) {
        docRef.get().then(e =>{
            setValidate(e.data()?.id)
        })
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    } else{
        alert('Adicione todas as informações');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="pacient-form-page"
    >
    {validate ? <Redirect to={`/painel/submit-confirmed#${validate}`}/> : null}
      <div className="top-buttons">
        <Link to="/painel/pacients">
          <img src={arrowImg} alt="arrowimg" />
          Voltar
        </Link>
      </div>
      <div className="pacient-form-page-outer">
        <div className="title">
          <h1>Cadastro de Pacientes</h1>
        </div>
        <form className="pacient-form-page-inputs" onSubmit={addPacient}>
          <Input name="pacientID" label="ID do Paciente" value={ID} readOnly />
          <Input
            name="pacientName"
            label="Nome do Paciente"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="pacientRG"
            label="RG do Paciente"
            value={RG}
            onChange={(e) => setRG(e.target.value)}
          />
          <Input
            name="birth"
            label="Data de Nascimento"
            value={birth}
            placeholder={"dd/mm/yyyy"}
            onChange={(e) => setBirth(e.target.value)}
          />
          <Input
            name="pacientContact"
            label="Contato 1"
            value={contact1}
            onChange={(e) => setContact1(e.target.value)}
          />
          <Input
            name="pacientContact"
            label="Contato 2"
            value={contact2}
            onChange={(e) => setContact2(e.target.value)}
          />
          <Input
            name="pacientAddress"
            label="Endereço do Paciente"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            name="profileImage"
            label="Foto do paciente"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />
          <Input
            name="pacientStartDate"
            label="Data de Início"
            type="date"
            readOnly
            defaultValue={startDate}
          />
          <Input
            name="pacientDentist"
            label="Dentista"
            place-holder="Coloque o link da imagem"
            value={dentist}
            onChange={(e) => setDentist(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => setContact([contact1, contact2])}
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default PacientForm;
