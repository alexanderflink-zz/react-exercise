import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <ul>
        {
          Object.keys(props.ingredients).map(key => {
            return <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}</li>
          })
        }
      </ul>
      <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button type="Danger" onClick={props.onCancel}>CANCEL</Button>
      <Button type="Success" onClick={props.onContinue}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default orderSummary;
