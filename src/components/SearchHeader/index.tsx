import React from 'react';
import Input from '../Input';

import './styles.css';


interface PageHeaderProps{
  title: string;
  searchFor?: any;
  placeholder?: string;
  value?: string;
  listenChange?: any;
}

const SearchHeader: React.FC<PageHeaderProps> = ({title, placeholder, searchFor, listenChange, value}) => {
  return (
    <header id="page-search">
      <div className="header-content">
        <strong>{title}</strong>

        <form onSubmit={searchFor}>
          <Input className="inputArea" name="search" placeholder={placeholder} value={value} onChange={listenChange}/>
          <button type="submit"> Procurar </button>
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;