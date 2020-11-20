import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import fire from "firebase";
import Input from "../../components/Input";

import { motion } from "framer-motion";

import arrowImg from "../../assets/images/back-arrow.svg";
import "./styles.css";
import Select from "../../components/Select";

const PacientForm = () => {
  const db = fire.firestore();

  var todayDate = formatDate(new Date());
  const randomID = () => {
    return Math.random().toString(9).substr(2, 9);
  };
  //eslint-disable-next-line
  const [ID, setID] = useState(randomID());
  const [name, setName] = useState("");
  const [RG, setRG] = useState("");
  const [birth, setBirth] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [validate, setValidate] = useState("");
  //eslint-disable-next-line
  const [contact, setContact] = useState([""]);
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState("");
  //eslint-disable-next-line
  const [startDate, setStartDate] = useState(todayDate);
  const [dentist, setDentist] = useState([]);
  const [selectedDentist, setSelectedDentist] = useState('');
  const [hasAge, setHasAge] = useState(true);
  const [responsible, setResponsible] = useState('');
  const [responsibleRG, setResponsibleRG] = useState('');


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

    if (
      name &&
      RG &&
      birth &&
      contact &&
      address &&
      dentist &&
      startDate &&
      ID
    ) {
      db.collection("pacients")
        .doc(ID)
        .set({
          ID,
          name: name.split(" "),
          RG,
          birth,
          responsible: responsible? responsible: null,
          responsibleRG: responsibleRG? responsibleRG : null,
          contact,
          address,
          dentist: selectedDentist,
          startDate,
          status: "active",
          image: profileImage,
        })
        .then(function() {
          setValidate(ID);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } else {
      alert("Adicione todas as informações");
    }
  };

  useEffect( () =>{
    db.collection('dentists').get().then((e:any) =>{
      var data:any = [];
      e.forEach((doc:any) =>{
        var dentist = {
          name: '',
          id: ''
        };
        dentist.name = doc.data().name;
        dentist.id = doc.data().ID;

        data.push(dentist);
      })

      setDentist(data);

    })
    //eslint-disable-next-line
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="pacient-form-page"
    >
      {validate ? (
        <Redirect to={`/painel/submit-confirmed#${validate}`} />
      ) : null}
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
            onChange={(e) =>{ 
              var year:number = Number(new Date().getFullYear);
              var age = year - Number(e.target.value.split('/')[2]);
              if(age < 18){
                setHasAge(false);
              }
              setBirth(e.target.value)
            
            }}
          />

          {hasAge === false ? (<Input
            name="pacientResponsible"
            label="Nome do Responsável"
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
          />
          ) : null}
          {hasAge === false ? (<Input
            name="pacientResponsible"
            label="RG do Responsável"
            value={responsibleRG}
            onChange={(e) => setResponsibleRG(e.target.value)}
          />
          ) : null}
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
            <Select name="dentist"
            label="Selecione um Dentista"
            value={selectedDentist}
            onChange={(e) => {
              setSelectedDentist(e.target.value);
            }}
            options={dentist.map((e:any)=>{
              return (
                { value: e.id, label: e.name.join(' ')}
              )
            })
          }
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
