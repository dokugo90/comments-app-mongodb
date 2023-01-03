//import { response } from 'express'
//import { get } from 'mongoose';
import React, { useState ,useRef, useEffect } from 'react';
import Card from './components/card';
//import { MongoClient } from 'mongodb';
import CreateUser from './components/create';
import { Routes, Route, Link } from 'react-router-dom';

export function RouterApp() {
  return (
    <>
    <Routes>
      <Route path='/post' element={<CreateUser />} />
      <Route path='/' element={<PostsApp />} />
    </Routes>
    </>
  )
}

export function PostsApp() {
  'use strict';

  const [backend, setBackend] = useState([])
  const [stateMan, setStateMan] = useState("")

  async function getData() {
    let req = await fetch("/api")
    let res = await req.json();
    console.log(res["users"])
    for (let i = 0; i < res["users"].length; i++) {
      backend.push({
        name: res["users"][i].name,
        comment: res["users"][i].comment,
      })
    }
    if (stateMan == "Got Data") {
      setStateMan("Getting Data")
    } else {
      setStateMan("Got Data")
    }
  }

  useEffect(() => {
    let ignore = false;

    if (!ignore) getData();
    return () => {
      ignore = true
    }
  }, [])

  document.addEventListener("submit", e => {
    
  })

  return (
    <div>
      <div className='post-container'>
      {
      backend.map((item, index) => (
        <Card key={index} name={item.name} comment={item.comment} />
        ))
    }
    </div>
    <a href='/#/post'><button className='new-post'>+</button></a>
    </div>
  )
}

