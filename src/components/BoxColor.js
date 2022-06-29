import React from 'react';

const BoxColor = (props) => {
  const backgroundColor = {
    background: `rgb(${props.r},${props.g},${props.b})`,
  };

  return (
    <h4 className="boxColor" style={backgroundColor}>
      rgb({props.r}, {props.g}, {props.b})
    </h4>
  );
};

export default BoxColor;
