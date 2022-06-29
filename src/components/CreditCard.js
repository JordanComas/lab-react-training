import React from 'react';

const CreditCard = (props) => {
  let lastFourDigits = props.number.slice(-4);
  let year = props.expirationYear.toString().slice(-2);

  let month = props.expirationMonth;
  if (props.expirationMonth < 10) {
    month = '0' + props.expirationMonth;
  }

  return (
    <div
      className="credit"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <p>{props.type}</p>
      <p>•••• •••• •••• {lastFourDigits}</p>
      <p>
        Expires {month}/{year}
        <b> {props.bank}</b>
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
