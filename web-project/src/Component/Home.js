import React, { Component } from 'react';
import './Home.css'



class Home extends Component{
  render(){
    return(
        <div>
            <div>
            {/* First Parallax Image with Logo Text */}
            <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
            <div class="w3-display-middle">
                <span class="w3-center w3-padding-large w3-white w3-xlarge w3-wide w3-animate-opacity">
                    WELCOME TO 
                    <span class="w3-hide-small">
                    SRICHAND
                    </span>
                </span>
            </div>
                <img src="1.jpg" class="w3-image w3-round " />
            </div>
            </div>

        {/* Container (About Section) */}
        <div class="w3-content w3-container w3-padding-64" id="about">
        <h3 class="w3-center">ABOUT ME</h3>
        <p class="w3-center"><em>I love photography</em></p>
            <p>
                We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <div class="w3-row">
            <div class="w3-col m6 w3-center w3-padding-large">
            <p><b><i class="fa fa-user w3-margin-right"></i>Bucky</b></p><br></br>
            <img src="avatar_hat.jpg" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333" />
            </div>
            
                    {/* Hide this text on small devices */}
            <div class="w3-col m6 w3-hide-small w3-padding-large">
            <p>
                Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
        </div>
    </div>
    );
  }
}

export default Home;