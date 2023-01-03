import React, { useState, useRef, useEffect } from 'react';
import { TextField } from "@mui/material"

export default function CreateUser() {
    const [username, setUsername] = useState("")
    const [usercomment, setComment] = useState("")
    const [invalid, isInvalid] = useState(false)

  return (
    <>
    <a href='/'><h1 className='cancel'>X</h1></a>
    <div className='form-flex'>
      <form action='/create' method="POST">
      <TextField value={username} style={{color: "white"}} onChange={e => setUsername(e.target.value)} name='name' id="outlined-basic" label="Username" placeholder='Max 20 characters' variant="outlined" />
      <TextField value={usercomment} style={{color: "white"}} onChange={e => setComment(e.target.value)} name='comment' id="outlined-basic" label="Comment" placeholder='Max 300 characters' variant="outlined" />
        <button type="submit">Submit</button>
      </form>
      </div>
      {
            invalid ?
            <h3 className='error-msg'>Enter All Fields Correctly</h3>
            : <></>
        }
      </>
  )
}