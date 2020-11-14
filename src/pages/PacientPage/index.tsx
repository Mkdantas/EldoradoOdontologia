import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import fire from "firebase";

import { motion } from "framer-motion";

import arrowImg from "../../assets/images/back-arrow.svg";

import "./styles.css";

function PacientPage({ match }: RouteComponentProps) {
  const db = fire.firestore();

  const [name, setName] = useState("");
  const [RG, setRG] = useState("");
  const [birth, setBirth] = useState("");
  const [contact, setContact] = useState([]);
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");

  var hash = window.location.href.split("#")[1];

  useEffect(() => {
    db.collection("pacients")
      .where("id", "==", hash)
      .get()
      .then((e: any) => {
        e.forEach((item: any) => {
          setName(item.data()?.name.join(' '));
          setRG(item.data()?.RG);
          setBirth(item.data()?.birth);
          setContact(item.data()?.contact);
          setAddress(item.data()?.address);
          setStatus(item.data()?.status);
          setProfileImage(item.data()?.image);
          setStartDate(item.data()?.startDate);
        });
      })
      .catch((err) => {
        console.log("seu erro" + err);
      });
      //eslint-disable-next-line
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="page-pacient-page"
    >
      <div className="top-buttons">
        <Link to="/painel/pacients">
          <img src={arrowImg} alt="arrowimg" />
          Voltar
        </Link>
      </div>
      <div className="profile">
        <div className="profile-card">
          <div className="personal-info">
            <div className="column">
              <li>
                <span>Nome:</span> {name}
              </li>
              <li>
                <span>RG:</span> {RG}
              </li>
              <li>
                <span>Data de Nascimento:</span> {birth}
              </li>
              <li>
                <span>Contato 1:</span> {contact[0]}
              </li>
              <li>
                <span>Contato 2:</span> {contact[1]}
              </li>
              <li>
                <span>Endereço:</span> {address}
              </li>
              <li>
                <span>Data de início:</span> {startDate}
              </li>
            </div>
          </div>
          <div className="img-section">
            <img src={profileImage} alt="profile" />
            <span>{status}</span>
          </div>
        </div>
        <div className="profile-info">
          <div className="comments">
            <div>
              <h3>Comentários</h3>
              <button>Novo Comentário</button>
            </div>
            <div className="comments-list"></div>
          </div>
          <div className="payments">
            <div>
              <h3>Pagamentos</h3>
              <button>Novo Pagamento</button>
            </div>
            <div className="payments-list"></div>
          </div>
          <div className="history">
            <div>
              <h3>Histórico</h3>
              <button>Novo Relatório</button>
            </div>
            <div className="history-list"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PacientPage;
