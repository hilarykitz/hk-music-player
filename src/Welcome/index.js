import React, { Component } from 'react';
import logoTop from '../logoTop.svg';
import logoBtm from '../logoBtm.svg';
import style from '../dist/styles/main.css';

export const Welcome = ({ entered, enter }) => {
  const logInLogo = `logo ${entered ? 'showSignIn' : ''}`;
  const welcomeBody = `body body--pink ${entered ? 'hidden' : ''}`;
  return (
    <main className={welcomeBody}>
      <div onClick={() => enter()}>
        <div className={logInLogo}>
          <img alt="egg top" src={logoTop} className="logoTop" />
          <img alt="egg btm" src={logoBtm} className="logoBtm" />
        </div>
        <a className="link-text--white">
          <h1 className="title">Egg Party</h1>
        </a>
      </div>
    </main>
  );
};
