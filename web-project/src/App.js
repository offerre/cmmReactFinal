import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './Component/Home'
import Order from './Component/Order'
import Navbar from './Component/Navbar';
import Carousel from './Component/Carousel';
import Product from './Component/Product';
import Contact from './Component/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      {/* <Carousel /> */}

        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/Order" component={Order} />
          <Route path="/Product" component={Product} />
          <Route path="/Contact" component={Contact} />
        </div>

      {/* Footer */}
      <footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <div class="w3-xlarge w3-section">
        <img src="Brand.png" /><br />
          <a href="https://www.facebook.com/srichand1948" class="w3-button"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
          <a href="https://www.instagram.com/srichand1948" class="w3-button"><i class="fa fa-instagram w3-hover-opacity"></i></a>
          <a href="https://twitter.com/srichand1948" class="w3-button"><i class="fa fa-twitter w3-hover-opacity"></i></a>
          <a href="https://www.youtube.com/srichandth" class="w3-button"><i class="fa fa-youtube w3-hover-opacity"></i></a>
        </div>
        <p>Hotline :(+66)-2300-1661</p>
      </footer>
      </div>
    );
  }
}

export default App;
