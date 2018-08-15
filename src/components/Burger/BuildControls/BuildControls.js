import React from 'react';
import css from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>Current Price: {props.price.toFixed(2)}</p>
      {
        controls.map((control => {
          return <BuildControl
            key={control.label}
            label={control.label}
            onAdd={() => props.onAdd(control.type)}
            onRemove={() => props.onRemove(control.type)}
            disabled={props.disabled[control.type]}
          />
        }))
      }
      <button className={css.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
  );
};

export default buildControls;
