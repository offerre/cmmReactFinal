import React, { Component } from 'react';
import './Home.css'

var sectionStyle = {
    width : "100%",
    height: "100vh" ,
}

var sectionStyle2 = {
    width : "100%",
    height: "50vh" ,
  }

var sectionStyle3 = {
    width : "20 vh",
    height: "10vh" ,
  }

var Style1 ={
    width : "100%",
  }

var Style3 ={
  width : "70%",
}

var Style4 ={
  width : "100%",
}

class Home extends Component{
  render(){
    return(
        <div>
        {/* First Parallax Image with Logo Text */}
        <div className="parallax-first w3-display-container w3-opacity-min" id="home" style={sectionStyle}>
            <div className="w3-display-middle " style={sectionStyle}>
            <span className="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small">SRICHAND THAI SKIN CARE</span>
            </div>
        </div>

        
        {/* Container (About Section) */}
        <div className="w3-content w3-container w3-padding-32" id="about">
        <h3 className="w3-center  w3-myFont title-font-size">ABOUT ME</h3>
        <p className="w3-center"><em>Cosmetics thai skin</em></p>
            <p>
            Srichan United Industrial Co., Ltd., established in 1948, has been in the business of manufacturing and distributing quality pharmaceuticals, 
            cosmetics and cosmetics for over 70 years, making the "Srichan" brand one of the oldest cosmetics brands. Most of Thailand Srichan has a very popular product in Thailand and abroad, 
            namely Srichand Translucent Powder, a lightweight translucent powder with the unique properties of Srichan Translucent Powder. 
            Srichan Transparent Powder is the best selling powder in Thailand in 2015 and in this year 2017 we have expanded our range of products. up To be brand with the beauty of Thai women and women around the world. 
            Available now at Watson Booth Eve & Boyd. Seven Eleven Duty Free Sriracha in flight THAI AirAsia, Siam Royal Gem, leading department stores and stores throughout Thailand and five other Asian countries.
            </p>
        
         <div className="w3-row">
            <div className="w3-col w3-padding-64 w3-center"><p><img src="Promo1.jpg" className="w3-round-xxlarge w3-image w3-opacity w3-hover-opacity-off" alt="Pt of Me" width="566" /></p></div>
            </div>
            </div>

                    {/* Second Parallax Image with Logo Text */}
        <div className="parallax-second w3-display-container w3-opacity-min" id="home" style={sectionStyle2}>
            <div className="w3-display-middle " style={sectionStyle}>
            <span className="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small">HOT DEAL</span>
            </div>
        </div>

        {/* Container (About Section) */}
        <div className="w3-content w3-container w3-padding-32" id="about">
        <h3 className="w3-center  w3-myFont title-font-size">HOT DEAL</h3>
        <p className="w3-center"><em>Special Price For You!</em></p>
        <div className="row">
            <div className="column-home">
            <div className="w3-container">
                <div className="w3-display-container">
                  <img src="Product/แป้ง/5.jpg" style={Style1} alt="" />
                  <span className="w3-tag w3-display-topleft">Sale</span>
                    <div className="w3-display-middle w3-display-hover">
                      <a href="/Products"><button className="w3-button w3-black w3-myFont w3-animate-opacity">Buy now <i className="fa fa-shopping-cart"></i></button></a>
                    </div>
                  </div>
                  <p>ศรีจันทร์ ทรานส์ลูเซนท์ คอมแพค พาวเดอร์ (รีฟิว)<br /><b className="w3-text-red"><del>฿280</del> ฿140</b></p>
                </div>
            </div>
            <div className="column-home">
                <div className="w3-container">
                <div className="w3-display-container">
                  <img src="Product/อายแชโดว์/1.jpg" style={Style1} alt="" />
                  <span className="w3-tag w3-display-topleft">Sale</span>
                    <div className="w3-display-middle w3-display-hover">
                      <a href="/Products"><button className="w3-button w3-black w3-myFont w3-animate-opacity">Buy now <i className="fa fa-shopping-cart"></i></button></a>
                    </div>
                  </div>
                  <p>เบตต้า อายแชโดว์ #ซีเคร็ต การ์เดน<br /><b className="w3-text-red"><del>฿490</del> ฿245</b></p>
                </div>
            </div>
            <div className="column-home">
            <div className="w3-container">
                  <div className="w3-display-container">
                    <img src="Product/รองพื้น/2.jpg" style={Style3} alt="" />
                    <span className="w3-tag w3-display-topleft">Sale</span>
                    <div className="w3-display-middle w3-display-hover">
                    <a href="/Products"><button className="w3-button w3-black w3-myFont w3-animate-opacity">Buy now <i className="fa fa-shopping-cart"></i></button></a>
                    </div>
                  </div>
                  <p>ลูมิเนสเซนส์ สเพลนเดอรัส อันเดอร์ เมคอัพ สี SC05<br /><b className="w3-text-red"><del>฿490</del> ฿147</b></p>
                </div>
            </div>
        </div>

        </div>

        {/* Third Parallax Image with Logo Text */}
        <div className="parallax-third w3-display-container w3-opacity-min" id="home" style={sectionStyle2}>
            <div className="w3-display-middle " style={sectionStyle}>
            <span className="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small">TRENDING PRODUCTS</span>
            </div>
        </div>

        <div className="w3-padding-16 w3-myFont font-size1">PRODUCTS</div>
        <div class="row">
          <div class="column-home2">
          <div className="w3-content w3-container w3-padding-16" id="about">
          <h3 className="w3-center  w3-myFont title-font-size w3-padding-16">Luminescence Series</h3>
                    <div className="w3-display-container">
                      <img className="w3-padding-8 w3-opacity" src="Promo5.jpg" style={Style4} alt="" />
                      <div className="w3-display-middle w3-display-hover">
                      <a href="/Products"><button className="w3-button w3-red gradient1 font-size2 w3-myFont w3-animate-left" style={sectionStyle3}>Buy now <i className="fa fa-shopping-cart"></i></button></a>
                      </div>
                    </div>
            </div>
          </div>

          <div class="column-home2">
          <div className="w3-content w3-padding-16" id="about">
            <h3 className="w3-center w3-myFont title-font-size w3-padding-16">SHOP NOW</h3>

                  <div className="w3-display-container">
                    <div className="w3-col">
                        <div className="w3-col w3-padding-8 w3-center"><p><a href="/Products" className="w3-bar-item"><img src="Promo2.png" className="w3-round-xxlarge w3-image w3-opacity w3-hover-opacity-off" width="525" alt="1" /></a></p></div>            
                    </div>
                  </div>
                </div>
            
          </div>
        </div>

        </div>
    );
  }
}

export default Home;