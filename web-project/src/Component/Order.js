import React, { Component } from 'react';
import './Order.css'

var sectionStyle = {
  width : "100%",
  height: "50vh" ,
}

class Order extends Component{
  render(){
    return(
        <div id="home">
            {/* First Parallax Image with Logo Text */}
            <div class="parallax3 w3-display-container w3-opacity-min" id="home" style={sectionStyle}>
                <div class="w3-display-middle " style={sectionStyle}>
                <span class="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small w3-myFont">YOUR ORDER</span>
                </div>
            </div>

              {/* Container (CheckOut Section) */}
        <div class="w3-content w3-container w3-padding-64" id="order">
          <h2 class="w3-padding-24">Shopping Cart</h2>
          Coming Soon...
          <div class="row">
          <div class="column">
            <h2>Total Price</h2>
            {/* <!-- main --> */}
            <div class="main">
                <div class="main-info">
                  <div class="form-left">
                    <h2>Checkout</h2>
                    <p>Select shipping method </p>
                    {/* <!--radio-buttons--> */}
                    <div class="grid-radio">
                      <span class="radio-circle radio-left">
                        <input type="radio" id="radio01" name="radio" />
                        <label for="radio01"><i></i>USPS Express Mail</label>
                      </span>
                      <span class="radio-circle">
                        <input type="radio" id="radio02" name="radio"/>
                        <label for="radio02"><i></i>FedEx</label>
                      </span>
                    </div>
                    {/* <!--//radio-buttons--> */}
                    <a href="#" class="pay-pal"> Checkout with <span>PayPal</span></a>
                    <span class="middle-text">OR</span>
                  </div>
                  <div class="form-right">
                    <div class="top-text">
                      <h3>Total Price</h3>
                      <span class="price">$ 150</span>
                      <div class="clear"> </div>
                    </div>
                    <p>Shopping cart:2 products</p>
                    <div class="account">
                      <form> 
                        <input type="text" class="checkout name" placeholder="Name" />
                        <input type="text" class="checkout month" placeholder="MM" maxlength="2" />
                        <input type="text" class="checkout month" placeholder="YY" maxlength="4" />
                        <input type="text" class="checkout pin" placeholder="4444 1111 3333 2222" maxlength="12" />
                        <input type="text" class="checkout month" placeholder="CVC" maxlength="4" />
                        <input type="submit" value="Checkout with credit card" />
                      </form>
                    </div>
                  </div>
                  <div class="clear"> </div>
                </div>		
            </div>
          </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Order;