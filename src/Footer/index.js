import React from 'react';
import { Link } from 'react-router-dom';
import MdSearch from 'react-icons/lib/md/search';
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
        <Link to="/myMusic">
          <MdRadio size={26} />
        </Link>
      </li>
      <li>
        <Link to="/">
          <MdSearch size={26} />
        </Link>
      </li>
    </ul>
  </footer>
);
