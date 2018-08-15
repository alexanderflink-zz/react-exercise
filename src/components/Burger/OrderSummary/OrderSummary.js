import React from 'react';

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
    </React.Fragment>
  );
};

export default orderSummary;
