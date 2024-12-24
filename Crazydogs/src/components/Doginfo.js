import React from 'react'

const Doginfo = (props) => {
    let { name, use, breed, life, temperament, pic, weight, height } = props;

    return (
        <>
            <div className="card my-3" >
                <img loading='lazy' src={pic} alt="..." />
                <div className="card-body">
                    <h3 className="card-title">Breed Name: {name} </h3>
                    <p className="card-text">Use: {use}</p>
                    <p className="card-text">Breed Group: {breed}</p>
                    <p className="card-text">Life-Span: {life}</p>
                    <p className="card-text">Temperament: {temperament}</p>
                    <p className="card-text">Weight: {weight} kg</p>
                    <p className="card-text">Height: {height} cm</p>
                </div>
            </div>
        </>
    )
}

export default Doginfo
