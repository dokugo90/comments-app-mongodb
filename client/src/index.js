import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Other, RouterApp, PostsApp } from './App';
import { HashRouter, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <RouterApp />
  </HashRouter>
);

