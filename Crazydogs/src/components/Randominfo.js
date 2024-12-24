import React from 'react'

const Randominfo = (props) => {
  let { name, use, breed, life, temperament, weight, height } = props;

  return (

    <div className="card-body">
      <h3 className="card-title">Breed Name: {name} </h3>
      <p className="card-text">Use: {use}</p>
      <p className="card-text">Breed Group: {breed}</p>
      <p className="card-text">Life-Span: {life}</p>
      <p className="card-text">Temperament: {temperament}</p>
      <p className="card-text">Weight: {weight} kg</p>
      <p className="card-text">Height: {height} cm</p>
    </div>
  );
}

export default Randominfo
