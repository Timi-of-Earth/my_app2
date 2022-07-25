import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <h2>Name: {props.name}</h2>
        <p>State of origin: {props.state}</p>
        <p>Stack: {props.stack}</p>
        <p>Description: {props.description}</p>
    </div>
  )
}
