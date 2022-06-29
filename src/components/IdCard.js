import React from 'react';

const Idcard = (props) => {
  return (
    <div className="id">
      <img src={props.picture} alt="pic"></img>
      <section>
        <p>
          <b>First Name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last Name: </b>
          {props.lastName}
        </p>
        <p>
          <b>Height: </b>
          {props.height}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Birth: </b>
          {props.birth.toString()}
        </p>
      </section>
    </div>
  );
};

export default Idcard;
