import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
        <div className="w3-top">
            <div className="w3-bar" id="myNavbar">
                <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onClick="toggleFunction()" title="Toggle Navigation Menu">
                <i className="fa fa-bars"></i>
                </a>
                <a href="/" className="w3-bar-item w3-button">HOME</a>
                <a href="/Order" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-bars"></i> ORDER</a>
                <a href="/Product" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PRODUCT</a>
                <a href="/Contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
                <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                <i className="fa fa-search"></i>
                </a>
            </div>

            {/* Navbar on small screens */}
            <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="/Order" className="w3-bar-item w3-button" onClick="toggleFunction()">ORDER</a>
                <a href="/Product" className="w3-bar-item w3-button" onClick="toggleFunction()">PRODUCT</a>
                <a href="/Contact" className="w3-bar-item w3-button" onClick="toggleFunction()">CONTACT</a>
                <a href="#" className="w3-bar-item w3-button">SEARCH</a>
            </div>
        </div>
        )
    }
}

export default Navbar