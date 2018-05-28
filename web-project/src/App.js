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
      <Carousel />
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/Order" component={Order} />
          <Route path="/Product" component={Product} />
          <Route path="/Contact" component={Contact} />
        </div>
      </div>
    );
  }
}

export default App;
