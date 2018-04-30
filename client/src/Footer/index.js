import React from 'react';
import { Link } from 'react-router-dom';
import MdSettings from 'react-icons/lib/md/settings';
import MdRadio from 'react-icons/lib/md/radio';
import MdHome from 'react-icons/lib/md/home';
export const Footer = () => (
  <footer className="footer">
    <ul>
      <li>
        <Link to="/">
          <MdHome size={26} />
        </Link>
      </li>
      <li>
        <Link to="/player">
          <MdRadio size={26} />
        </Link>
      </li>
      <li>
        <Link to="/settings">
          <MdSettings size={26} />
        </Link>
      </li>
    </ul>
  </footer>
);
