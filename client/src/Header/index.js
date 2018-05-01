import React from 'react';
import logoBtm from '../logoBtm.svg';
import MdMenu from 'react-icons/lib/md/menu';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a className="brandName">Egg Party</a>
        <img alt="egg btm" src={logoBtm} className="logoBtm" />
      </div>
      <div className="topMenuIcon">
        <MdMenu size={30} color="white" />
      </div>
    </header>
  );
};
