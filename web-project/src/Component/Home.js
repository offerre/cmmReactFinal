import React, { Component } from 'react';
import './Home.css'

var sectionStyle = {
    width : "100%",
    height: "100vh" ,
}

class Home extends Component{
  render(){
    return(
        <div>
        {/* First Parallax Image with Logo Text */}
        <div class="parallax w3-display-container w3-opacity-min" id="home" style={sectionStyle}>
            <div class="w3-display-middle " style={sectionStyle}>
            <span class="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small w3-myFont">SRICHAND THAI SKIN CARE</span>
            </div>
        </div>

        
        {/* Container (About Section) */}
        <div class="w3-content w3-container w3-padding-64" id="about">
        <h3 class="w3-center">ABOUT ME</h3>
        <p class="w3-center"><em>Cosmetics thai skin</em></p>
            <p>
            Srichan United Industrial Co., Ltd., established in 1948, has been in the business of manufacturing and distributing quality pharmaceuticals, 
            cosmetics and cosmetics for over 70 years, making the "Srichan" brand one of the oldest cosmetics brands. Most of Thailand Srichan has a very popular product in Thailand and abroad, 
            namely Srichand Translucent Powder, a lightweight translucent powder with the unique properties of Srichan Translucent Powder. 
            Srichan Transparent Powder is the best selling powder in Thailand in 2015 and in this year 2017 we have expanded our range of products. up To be brand with the beauty of Thai women and women around the world. 
            Available now at Watson Booth Eve & Boyd. Seven Eleven Duty Free Sriracha in flight THAI AirAsia, Siam Royal Gem, leading department stores and stores throughout Thailand and five other Asian countries.
            </p>
        </div>

         <div class="w3-row">
            <div class="w3-col s6 w3-center"><p><a href="/Products" className="w3-bar-item" onClick="toggleFunction()"><img src="Promo2.png" class="w3-round w3-image w3-opacity w3-hover-opacity-off" width="600" alt="1" /></a></p></div>
            <div class="w3-col s6 m5 w3-center"><p><img src="Promo1.jpg" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Pt of Me" width="566" /></p></div>
        </div> 
        </div>
    );
  }
}

export default Home;