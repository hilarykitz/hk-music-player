import React from 'react';
import logoBtm from '../logoBtm.svg';
import MdMenu from 'react-icons/lib/md/menu';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/myMusic" className="brandName">
          Egg Party
        </Link>
        <img alt="egg btm" src={logoBtm} className="logoBtm" />
      </div>
      <div className="topMenuIcon">
        <MdMenu size={30} color="white" />
      </div>
    </header>
  );
};
