import React, {Component} from 'react';
import './Navbar.css'


// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

class Navbar extends Component{
    render(){
        return(
        <div className="w3-top">
            <div className="w3-bar" id="myNavbar">
                <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="" title="Toggle Navigation Menu">
                <i className="fa fa-bars"></i>
                </a>
                <a href="/" className="w3-bar-item w3-button"><img src="logo2.png" width="20" height="20" alt="" /></a>
                <a href="/Products" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PRODUCT</a>
                <a href="/Order" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-bars"></i> ORDER</a>
                <a href="/Contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
            </div>

            {/* Navbar on small screens */}
            <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="/Product" className="w3-bar-item w3-button" >PRODUCT</a>
                <a href="/Order" className="w3-bar-item w3-button" >ORDER</a>
                <a href="/Contact" className="w3-bar-item w3-button" >CONTACT</a>
            </div>
        </div>
        )
    }
}

export default Navbar