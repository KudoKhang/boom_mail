import React, { Component } from 'react';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Regiter from './pages/Register';

function App() {
  return (
    <div className="App">
      <nav>
      <link to="/"></link>
      <link to="/login"></link>
      <link to="/register"></link>
        {/* <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/login"></Link>
          </li>
          <li>
            <Link to="/price"></Link>
          </li>
        </ul> */}
      </nav>


      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Regiter/> }/>

        {/* <Route path="/price" element={ <Price/> } /> */}
      </Routes>
    </div>
  );
}


export default App;
