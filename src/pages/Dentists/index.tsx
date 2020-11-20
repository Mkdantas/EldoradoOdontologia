import React, { useEffect, useState } from 'react';
import DentistSearchItem from '../../components/DentistSearchItem';
import SearchHeader from '../../components/SearchHeader';
import fire from 'firebase';
import { motion } from 'framer-motion';

import './styles.css';
import { Link } from 'react-router-dom';


function Dentists() {
  const db = fire.firestore();

  const [dentistList, setDentistList] = useState([]);
  const [lastVisible, setLastVisible] = useState({});
  const [search, setSearch] = useState("");
  const [needLoadMore, setNeedLoadMore] = useState(false);


  const searchQuery = (e:any) => {
    e.preventDefault();
    db.collection("dentists")
      .limit(10)
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
        setDentistList(datas);
      });
  };

  const loadMore = () => {
    db.collection("dentists")
      .limit(10)
      .startAfter(lastVisible)
      .get()
      .then((e) => {
        var datas:any = [...dentistList];
        e.forEach((item) => {
          var data = item.data();
          data.name = data.name.join(' ');
          datas.push(data);
        });

        
        if(datas.length >= 10){
          setNeedLoadMore(true);
        } else {
          setNeedLoadMore(false);
        }

        setLastVisible(e.docs[e.docs.length - 1]);
        setDentistList(datas);
      });
  };

  useEffect(() => {
    db.collection("dentists")
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
        datas.forEach((item:any) => item.name = item.name.join(' '));
        setDentistList(datas);
      });
  }, [db]);

  console.log(dentistList)

  return (
    <motion.div 
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} id="page-dentists">
      <div className="search-header">
      <SearchHeader
          title=" Lista de Dentistas"
          placeholder="Digite o nome do dentista"
          searchFor={searchQuery}
          value={search}
          listenChange={(e: any) => {
            setSearch(e.target.value);
          }}
        />
        <div className="top-bar">
          <h3>{dentistList.length} Dentistas encontrados!</h3>
          <Link to="/painel/new-dentist">
          <button>Adicionar Novo</button>
          </Link>
        </div>
        </div>
        <main>
         {dentistList.map((dentist:any) =>{
return(
        <DentistSearchItem
            id={dentist.ID}
            name={dentist.name}
            CRO={dentist.CRO}
            daysWorked={dentist.schedulers}
            contact={dentist.contact}
            avatar={dentist.image}
            />
)
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

export default Dentists;