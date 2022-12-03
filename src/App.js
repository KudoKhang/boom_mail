import React, { Component } from 'react';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import SignUp from './pages/SignUp';
// import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <nav>
      <link to="/"></link>
      <link to="/login"></link>
      <link to="/register"></link>
      <link to="/pricing"></link>
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
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/pricing" element={ <Pricing/> }/>
        <Route path="/*" element={ <PageNotFound/> } />
        {/* <Route path="/price" element={ <Price/> } /> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}

export default App;
