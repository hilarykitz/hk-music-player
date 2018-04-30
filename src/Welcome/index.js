import React from 'react';
import logoTop from '../logoTop.svg';
import logoBtm from '../logoBtm.svg';
import { Link } from 'react-router-dom';

export const Welcome = ({ enter }) => {
  return (
    <div className="mainSplash">
      <div className="logo">
        <img alt="egg top" src={logoTop} className="logoTop" />
        <Link to="/myMusic" className="enterLink">
          Egg Party
        </Link>
        <img alt="egg btm" src={logoBtm} className="logoBtm" />
      </div>
    </div>
  );
};
