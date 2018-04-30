import React from 'react';
import logoTop from '../logoTop.svg';
import logoBtm from '../logoBtm.svg';
import MdMenu from 'react-icons/lib/md/menu';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img alt="egg top" src={logoTop} className="logoTop" />
          <img alt="egg btm" src={logoBtm} className="logoBtm" />
        </div>
      </Link>
      <Link to="/settings">
        <div className="topMenuIcon">
          <MdMenu size={30} color="white" />
        </div>
      </Link>
    </header>
  );
};
