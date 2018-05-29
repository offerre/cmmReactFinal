import React, { Component } from 'react';
import './Product.css'

var sectionStyle = {
  width : "100%",
  height: "50vh" ,
}

var Style1 ={
  width : "100%",
}

var Style2 ={
  width : "60%",
}

var Style3 ={
  width : "70%",
}

var Style4 ={
  width : "120%",
}

class Product extends Component{
  render(){
    return(
        <div id="home">
            {/* First Parallax Image with Logo Text */}
            <div class="parallax2 w3-display-container w3-opacity-min" id="home" style={sectionStyle}>
                <div class="w3-display-middle " style={sectionStyle}>
                <span class="w3-display-middle w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small w3-myFont">PRODUCT</span>
                </div>
            </div>

            <div className="w3-content w3-container" id="Products">
            <div className="w3-padding-64 Products-Title">Products</div>

              <div class="w3-row">
              <div class="w3-col l3 s6">

                <div class="w3-container">
                  <div class="w3-display-container">
                  <img src="Product/ลิป/p1.jpg" style={Style1} alt="" />
                  <span class="w3-tag w3-display-topleft">New</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>เบตต้า ลิควิด ลิปสติก<br /><b>฿220</b></p>
                </div>

                <div class="w3-container">
                <div class="w3-display-container">
                  <img src="Product/แป้ง/5.jpg" style={Style1} alt="" />
                  <span class="w3-tag w3-display-topleft">Sale</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>ศรีจันทร์ ทรานส์ลูเซนท์ คอมแพค พาวเดอร์ (รีฟิว)<br /><b class="w3-text-red"><del>฿280</del> ฿140</b></p>
                </div>
              </div>

              <div class="w3-col l3 s6">
              
                <div class="w3-container">
                  <div class="w3-display-container">
                    <img src="Product/อายแชโดว์/5.jpg" style={Style1} alt="" />
                    <span class="w3-tag w3-display-topleft">New</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>เบตต้า อายแชโดว์ #เอนด์เลส ซัมเมอร์<br /><b>฿490</b></p>
                </div>

                <div class="w3-container">
                <div class="w3-display-container">
                  <img src="Product/อายแชโดว์/1.jpg" style={Style1} alt="" />
                  <span class="w3-tag w3-display-topleft">Sale</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>เบตต้า อายแชโดว์ #ซีเคร็ต การ์เดน<br /><b class="w3-text-red"><del>฿490</del> ฿245</b></p>
                </div>
              </div>

              <div class="w3-col l3 s6">

                <div class="w3-container">
                  <div class="w3-display-container">
                  <img src="Product/กันแดด/1.jpg" style={Style2} alt="" />
                  <span class="w3-tag w3-display-topleft">New</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>ลูมิเนสเซนส์ แฟบูลัส ยูวี ชิลด์ ขนาด 15 มล.<br /><b>฿159</b></p>
                </div>

                <div class="w3-container">
                  <div class="w3-display-container">
                    <img src="Product/รองพื้น/2.jpg" style={Style3} alt="" />
                    <span class="w3-tag w3-display-topleft">Sale</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>ลูมิเนสเซนส์ สเพลนเดอรัส อันเดอร์ เมคอัพ สี SC05<br /><b class="w3-text-red"><del>฿490</del> ฿147</b></p>
                </div>

              </div>

              <div class="w3-col l3 s6">
              
                <div class="w3-container">
                  <div class="w3-display-container">
                  <img src="Product/ผู้ชาย/1.jpg" style={Style4} alt="" />
                  <span class="w3-tag w3-display-topleft">New</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>ศรีจันทร์ฟอร์เมน แบลคเอดิชั่น 5 กรัม<br /><b>฿189</b></p>
                </div>

                <div class="w3-container">
                <div class="w3-display-container">
                  <img src="Product/แป้ง/11.jpg" style={Style4} alt="" />
                  <span class="w3-tag w3-display-topleft">Sale</span>
                    <div class="w3-display-middle w3-display-hover">
                      <button class="w3-button w3-black">Buy now <i class="fa fa-shopping-cart"></i></button>
                    </div>
                  </div>
                  <p>ศรีจันทร์ ทรานส์ลูเซนท์ พาวเดอร์ ขนาด 30 กรัม<br /><b class="w3-text-red"><del>฿590</del> ฿295</b></p>
                </div>

              </div>
            </div>
            </div>
        </div>
    );
  }
}

export default Product;