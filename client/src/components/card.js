
import React, { useState, useRef, useEffect } from 'react'

function Card(props) {
  return (
    <div className='flex'>
    <div className='card' key={props.key}>
        <h3 className='username'>{props.name}</h3>
        <p className='user-comment'>{props.comment}</p>
    </div>
    </div>
  )
}

export default Card