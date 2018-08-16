import React from 'react';
import css from './Toolbar.css';
import Logo from '../../UI/Logo/Logo';

const toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div>MENU</div>
      <Logo/>
      <nav>...</nav>
    </header>
  );
};

export default toolbar;
