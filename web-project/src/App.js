import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './Component/Home'
import Order from './Component/Order'
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Contact from './Component/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/Order" component={Order} />
          <Route path="/Products" component={Product} />
          <Route path="/Contact" component={Contact} />


      {/* Footer */}
      <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <div className="w3-xlarge w3-section">
        <img src="Brand.png" alt="" /><br />
          <a href="https://www.facebook.com/srichand1948" className="w3-button"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
          <a href="https://www.instagram.com/srichand1948" className="w3-button"><i className="fa fa-instagram w3-hover-opacity"></i></a>
          <a href="https://twitter.com/srichand1948" className="w3-button"><i className="fa fa-twitter w3-hover-opacity"></i></a>
          <a href="https://www.youtube.com/srichandth" className="w3-button"><i className="fa fa-youtube w3-hover-opacity"></i></a>
        </div>
        <p>Hotline :(+66)-2300-1661</p>
      </footer>
      </div>
    );
  }
}

export default App;
