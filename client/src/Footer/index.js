import React from 'react';
import MdSettings from 'react-icons/lib/md/settings';
import MdRadio from 'react-icons/lib/md/radio';
import MdFavorite from 'react-icons/lib/md/favorite';
export const Footer = () => (
  <footer className="footer">
    <ul>
      <li>
        <MdFavorite size={26} />
      </li>
      <li>
        <MdRadio size={26} />
      </li>
      <li>
        <MdSettings size={26} />
      </li>
    </ul>
  </footer>
);
