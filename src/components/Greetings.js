import React from 'react';

const Greetings = (props) => {
  let greet;
  switch (props.lang) {
    case 'de':
      greet = 'Hallo';
      break;
    case 'en':
      greet = 'Hello';
      break;
    case 'es':
      greet = 'Hola';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    default:
      greet = 'Hello';
      break;
  }

  return (
    <h3>
      {greet} {props.children}
    </h3>
  );
};

export default Greetings;
