
import React, { useState, useRef, useEffect } from 'react';
import { Badge } from "@mui/material";


function Card(props) {
  return (
    <div className='flex'>
    <div className='card' key={props.key}>
        <h3 className='username'>{props.name}</h3>
        <p className='user-comment'>{props.comment}</p>
        {/*<div className='data-badge'>
        <p className='likes-amount'>{props.likes}</p>
  </div>*/}
    </div>
    <form action={`/like/${props.name}`} method='POST'> {/*`/like/${props.name}`*/ /*  <button className='like-button' type='submit'><i className='material-icons'>favorite</i></button> */}
        <div className='like-button-flex'>
        <button className='btn' type='submit'><Badge color="primary" showZero max={100} anchorOrigin={{vertical: "bottom", horizontal: "right"}} badgeContent={props.likes}><i className='material-icons'>favorite</i></Badge></button>
        </div>
        </form>
    {/*<button className='btn' type='submit'><Badge max={1000} badgeContent={props.likes}><i className='material-icons'>favorite</i></Badge></button>*/}
    </div>
  )
}

export default Card