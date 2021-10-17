import React from 'react';
import './Banner.css';
import BannerImg from "../../../Image/bannerbackground.png"

const Banner = () => {
    return (
        <div className="banner-style">
            
           <div className="banner-text">
           <h1>Best Food Wating Your Bally</h1>
           <input type="text" placeholder="Scrch Your Product" />
           </div>

        </div>
    );
};

export default Banner;