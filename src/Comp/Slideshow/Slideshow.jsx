import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Carousel from '../Carousel/Carousel';
import Sidebox from './Sidebox';
import "./Slideshow.css"

const slideImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  ];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <Carousel
                show={3}
                infiniteLoop
            >
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/410UOtOGvsL._AC_SY200_.jpg" alt="placeholder" style={{width: '55%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/310oMFhuDqL._AC_SY200_.jpg" alt="placeholder" style={{width: '67%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/214Ck7MfbRL._AC_SY200_.jpg" alt="placeholder" style={{width: '80%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/31G1NouVxaL._AC_SY200_.jpg" alt="placeholder" style={{width: '85%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/I/61RDQaMgaJL._AC_SY200_.png" alt="placeholder" style={{width: '57%'}} />
                    </div>
                </div>

                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41kLq+iVPHL._AC_SY200_.jpg" alt="placeholder" style={{width: '45%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/512sIbfImCL._AC_SY200_.jpg" alt="placeholder" style={{width: '70%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/21Y3xVnL0BL._AC_SY200_.jpg" alt="placeholder" style={{width: '46%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img width="10%" src="https://m.media-amazon.com/images/I/61RDQaMgaJL._AC_SY200_.png" alt="placeholder" style={{width: '57%'}} />
                    </div>
                </div>
            </Carousel>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
<Sidebox/>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
            
          </div>
          
        </Slide>
      </div>
    )
};

export default Slideshow;