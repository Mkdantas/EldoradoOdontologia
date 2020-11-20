import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Input from "../../components/Input";
import fire from "firebase";

import arrowImg from "../../assets/images/back-arrow.svg";
import "./styles.css";
import Select from "../../components/Select";

const DentistForm = () => {
  const db = fire.firestore();
  const randomID = () => {
    return Math.random().toString(9).substr(2, 9);
  };
  const [schedulers, setSchedulers] = useState([
    {
      week_day: '0',
      from: "",
      to: "",
    },
  ]);
  //eslint-disable-next-line
  const [ID, setID] = useState(randomID());
  const [name, setName] = useState("");
  const [CRO, setCRO] = useState("");
  const [contact1, setContact1] = useState("");
  const [contact2, setContact2] = useState("");
  const [validate, setValidate] = useState("");
  //eslint-disable-next-line
  const [contact, setContact] = useState([""]);
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const setScheduleItemValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduledItems = schedulers.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setSchedulers(updatedScheduledItems);
  };

  const oneMoreField = () => {
    setSchedulers([
      ...schedulers,
      {
        week_day: '0',
        from: "",
        to: "",
      },
    ]);
  };

  const addDentist = (e: any) => {
    e.preventDefault();

    if (name && CRO && contact && address && schedulers && ID) {
      db.collection("dentists")
        .doc(ID)
        .set({
          ID,
          name: name.split(" "),
          CRO,
          contact,
          address,
          status: "active",
          image: profileImage,
          schedulers
        })
        .then(function(){
            setValidate(ID);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } else {
      alert("Adicione todas as informações");
    }
  };

  return (
    <div id="dentist-form-page">
      {validate ? (
        <Redirect to={`/painel/submit-confirmed#${validate}`} />
      ) : null}
      <div className="top-buttons">
        <Link to="/painel/dentists">
          <img src={arrowImg} alt="arrowimg" />
          Voltar
        </Link>
      </div>
      <div className="dentist-form-page-outer">
        <div className="title">
          <h1>Cadastro de dentistas</h1>
        </div>
        <form className="dentist-form-page-inputs" key="0" onSubmit={addDentist}>
          <Input name="dentistID" label="ID do dentista" value={ID} readOnly key="1" />
          <Input
            name="dentistName"
            label="Nome do dentista"
            value={name}
            onChange={(e) => setName(e.target.value)}
            key="2"
          />
          <Input
            name="dentistCRO"
            label="CRO do dentista"
            value={CRO}
            onChange={(e) => setCRO(e.target.value)}
            key="3"
          />
          <Input
            name="dentistContact"
            label="Contato 1"
            value={contact1}
            onChange={(e) => setContact1(e.target.value)}
            key="4"
          />
          <Input
            name="dentistContact"
            label="Contato 2"
            value={contact2}
            onChange={(e) => setContact2(e.target.value)}
            key="5"
          />
          <Input
            name="dentistAddress"
            label="Endereço do dentista"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            key="6"
          />
          <Input
            name="profile-image"
            label="Foto de perfil"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            key="7"
          />
          <h1>
            Agenda <span onClick={oneMoreField}>+ adicionar </span>
          </h1>

          <div className="schedule-section">
            {schedulers.map((item, index) => {
              return (
                <div className="outer-scheduler" key={index}>
                  <Select
                    name="dentistScheduleDay"
                    label="Dia da semana"
                    value={item.week_day}
                    onChange={(e) => {
                      setScheduleItemValue(index, "week_day", e.target.value);
                    }}
                    options={[
                      { value: "0", label: "Segunda-feira" },
                      { value: "1", label: "Terça-feira" },
                      { value: "2", label: "Quarta-feira" },
                      { value: "3", label: "Quinta-feira" },
                      { value: "4", label: "Sexta-feira" },
                      { value: "5", label: "Sábado" },
                    ]}
                  />
                  <Input
                    name="dentistScheduleTimeStart"
                    label="Início"
                    value={item.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, "from", e.target.value)
                    }
                    type="time"
                  />
                  <Input
                    name="dentistScheduleTimeEnd"
                    label="Término"
                    value={item.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, "to", e.target.value)
                    }
                    type="time"
                  />
                </div>
              );
            })}
          </div>
          <button 
          type="submit"
          onClick={() => setContact([contact1, contact2])}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default DentistForm;
