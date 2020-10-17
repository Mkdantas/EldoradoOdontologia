import React from 'react';
import Input from '../Input';

import './styles.css';


interface PageHeaderProps{
  title: string;
}

const SearchHeader: React.FC<PageHeaderProps> = ({title}) => {
  return (
    <header id="page-search">
      <div className="header-content">
        <strong>{title}</strong>

        <form>
          <Input className="inputArea" name="search"/>
          <button type="submit"> Procurar </button>
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;