import React from 'react';
import css from './Backdrop.css';

const backdrop = (props) => {
  return props.show ? <div className={css.Backdrop} onClick={props.onClick}></div> : null
};

export default backdrop;
