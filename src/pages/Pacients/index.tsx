import React, { useEffect, useState } from "react";
import SearchHeader from "../../components/SearchHeader";
import PacientSearchItem from "../../components/PacientSearchItem";
import { motion } from "framer-motion";
import fire from "firebase";

import "./styles.css";
import { Link } from "react-router-dom";

function Pacients() {
  const db = fire.firestore();

  const [pacientList, setPacientList] = useState([]);
  const [lastVisible, setLastVisible] = useState({});
  const [search, setSearch] = useState("");
  const [needLoadMore, setNeedLoadMore] = useState(false);

  const searchQuery = (e:any) => {
    e.preventDefault();
    db.collection("pacients")
      .where("name", "array-contains", search)
      .get()
      .then((e) => {
        var datas: any = [];
        e.forEach((item) => {
          datas.push(item.data());
        });

        if(datas.length >= 10){
          setNeedLoadMore(true);
        } else {
          setNeedLoadMore(false);
        }
        
        setLastVisible(e.docs[e.docs.length - 1]);
        datas.forEach((item:any) => item.name = item.name.join(' '));
        setPacientList(datas);
      });
  };

  const loadMore = () => {
    db.collection("pacients")
      .limit(10)
      .startAfter(lastVisible)
      .get()
      .then((e) => {
        var datas: any = [...pacientList];
        e.forEach((item) => {
          datas.push(item.data());
        });

        if(datas.length >= 10){
          setNeedLoadMore(true);
        } else {
          setNeedLoadMore(false);
        }

        datas.forEach((item:any) => item.name = item.name.join(' '));
        setLastVisible(e.docs[e.docs.length - 1]);

        setPacientList(datas);
      });
  };

  useEffect(() => {
    db.collection("pacients")
      .limit(10)
      .get()
      .then((e) => {
        var datas: any = [];
        e.forEach((item) => {
          datas.push(item.data());
        });

        if(datas.length >= 10){
          setNeedLoadMore(true);
        }

        setLastVisible(e.docs[e.docs.length - 1]);

        setPacientList(datas);
      });
  }, [db]);

  console.log(pacientList);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="page-pacients"
    >
      <div className="search-header">
        <SearchHeader
          title=" Lista de Pacientes"
          placeholder="Digite o nome do paciente"
          searchFor={searchQuery}
          value={search}
          listenChange={(e: any) => {
            setSearch(e.target.value);
          }}
        />
        <div className="top-bar">
          <h3>{pacientList.length} Pacientes encontrados!</h3>
          <Link to="/painel/new-pacient">
            <button>Adicionar Novo</button>
          </Link>
        </div>
      </div>
      <main>
        {pacientList.map((e: any) => {
          return (
            <PacientSearchItem
              key={e.id + "123"}
              id={e.id}
              name={e.name}
              avatar={e.image}
              contact={e.contact}
              dentista="Fátima Lima"
            />
          );
        })}
        { needLoadMore ? 
          <div className="get-more">
            <button onClick={loadMore}>Carregar mais</button>
          </div>
         : null}
      </main>
    </motion.div>
  );
}

export default Pacients;
