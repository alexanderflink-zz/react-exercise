import React from 'react';
import logoImage from '../../../assets/images/burger-logo.png';
import css from './Logo.css';

const logo = (props) => {
  return (
    <div className={css.Logo}>
      <img src={logoImage} alt="logo"/>
    </div>
  );
};

export default logo;
