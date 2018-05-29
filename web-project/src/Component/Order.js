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
            <div className="parallax3 w3-display-container w3-opacity-min" id="home" style={sectionStyle}>
                <div className="w3-display-middle " style={sectionStyle}>
                <span className="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small w3-myFont">YOUR ORDER</span>
                </div>
            </div>

              {/* Container (CheckOut Section) */}
        <div className="w3-content w3-container w3-padding-64" id="order">
          <h2 className="w3-padding-24">Shopping Cart</h2>
          Coming Soon...
          <div className="row">
          <div className="column">
            <h2>Total Price</h2>
            {/* <!-- main --> */}
            <div className="main">
                <div className="main-info">
                  <div className="form-left">
                    <h2>Checkout</h2>
                    <p>Select shipping method </p>
                    {/* <!--radio-buttons--> */}
                    <div className="grid-radio">
                      <span className="radio-circle radio-left">
                        <input type="radio" id="radio01" name="radio" />
                        <label htmlFor="radio01"><i></i>USPS Express Mail</label>
                      </span>
                      <span className="radio-circle">
                        <input type="radio" id="radio02" name="radio"/>
                        <label htmlFor="radio02"><i></i>FedEx</label>
                      </span>
                    </div>
                    {/* <!--//radio-buttons--> */}
                    <a href="#home" className="pay-pal"> Checkout with <span>PayPal</span></a>
                    <span className="middle-text">OR</span>
                  </div>
                  <div className="form-right">
                    <div className="top-text">
                      <h3>Total Price</h3>
                      <span className="price">$ 150</span>
                      <div className="clear"> </div>
                    </div>
                    <p>Shopping cart:2 products</p>
                    <div className="account">
                      <form> 
                        <input type="text" className="checkout name" placeholder="Name" />
                        <input type="text" className="checkout month" placeholder="MM" maxLength="2" />
                        <input type="text" className="checkout month" placeholder="YY" maxLength="4" />
                        <input type="text" className="checkout pin" placeholder="4444 1111 3333 2222" maxLength="12" />
                        <input type="text" className="checkout month" placeholder="CVC" maxLength="4" />
                        <input type="submit" value="Checkout with credit card" />
                      </form>
                    </div>
                  </div>
                  <div className="clear"> </div>
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