import React from 'react';
import css from './Button.css';

const button = (props) => {
  return (<button className={[css.Button, css[props.type]].join(' ')} onClick={props.onClick}>{props.children}</button>);
};

export default button;
