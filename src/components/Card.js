import React from 'react'

function Card(prop) {
  return (
    <div className='card'>
    <h2>Name: {prop.personaje.name}</h2>
    <img src={prop.personaje.image} alt={prop.personaje.name} />
    <p>Status: {prop.personaje.status}</p>
    <p>Species: {prop.personaje.species}</p>
    <p>Gender: {prop.personaje.gender}</p>
    <p>Origin: {prop.personaje.origin.name}</p>
    <p>Location: {prop.personaje.location.name}</p>
    </div>
  )
}

export default Card