import React, { Component } from 'react';
import './Product.css'
import Carousel from './Carousel'

class Product extends Component{
  render(){
    return(
        <div>
            <Carousel />
        </div>
    );
  }
}

export default Product;