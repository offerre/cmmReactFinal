import React, {Component} from 'react';
import { Link } from 'react-router-dom'
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
                <Link exact to="/" className="w3-bar-item w3-button"><img src="logo2.png" width="20" height="20" alt="" /></Link>
                <Link to="/Products" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PRODUCT</Link>
                <Link to="/Order" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-bars"></i> ORDER</Link>
                <Link to="/Contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</Link>
            </div>

            {/* Navbar on small screens */}
            <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <Link to="/Product" className="w3-bar-item w3-button" >PRODUCT</Link>
                <Link to="/Order" className="w3-bar-item w3-button" >ORDER</Link>
                <Link to="/Contact" className="w3-bar-item w3-button" >CONTACT</Link>
            </div>
        </div>
        )
    }
}

export default Navbar