import React, { Component } from 'react';
import './Contact.css'

var sectionStyle = {
  width : "100%",
  height: "50vh" ,
}

class Contact extends Component{
  render(){
    return(

        <div id="home">
            {/* First Parallax Image with Logo Text */}
            <div className="parallax4 w3-display-container w3-opacity-min" id="home" style={sectionStyle}>
                <div className="w3-display-middle " style={sectionStyle}>
                <span className="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small w3-myFont">CONTACT</span>
                </div>
            </div>

          <div>
          </div>
        {/* <!-- Contact --> */}
        <div className="w3-padding-64 w3-light-grey w3-small w3-center w3-container" id="footer">
          <div className="w3-row-padding">
            <div className="w3-col s4">
              <h4>Contact</h4>
              <p>Questions? Go ahead.</p>
              <form action="/">
                <p><input className="w3-input w3-border" type="text" placeholder="Name" name="Name" required /></p>
                <p><input className="w3-input w3-border" type="text" placeholder="Email" name="Email" required /></p>
                <p><input className="w3-input w3-border" type="text" placeholder="Subject" name="Subject" required /></p>
                <p><input className="w3-input w3-border" type="text" placeholder="Message" name="Message" required /></p>
                <button href="/" className="w3-button w3-block w3-black">Send</button>
              </form>
            </div>

            <div className="w3-col s4">
              <h4>About</h4>
              <p><a href="/#about">About us</a></p>
              <p><a href="https://www.srichand.com/th/pages/contact_us">Find store</a></p>
              <p><a href="https://www.srichand.com/th/pages/policy">Privacy Policy</a></p>
              <p><a href="https://www.srichand.com/th/users/sign_in">Payment</a></p>
              <p><a href="/Products">Product</a></p>
              <p><a href="/">Home</a></p>
            </div>

            <div className="w3-col s4 w3-justify">
              <h4>Store</h4>
              <p><i className="fa fa-fw fa-map-marker"></i> Srichan United Industrial Co., Ltd.</p>
              <p><i className="fa fa-fw fa-phone"></i> (+66)-2300-1661</p>
              <p><i className="fa fa-fw fa-envelope"></i> support@srichand.co.th</p>
              <h4>We accept</h4>
              <p><i className="fa fa-fw fa-cc-amex"></i> Bitcoin</p>
              <p><i className="fa fa-fw fa-credit-card"></i> Credit/Debit Card</p>
              <br />
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Contact;