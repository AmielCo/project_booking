import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/max500/654805.webp?k=7e48a26fb41e26829b2e82b8e1f5fc790890ecbf2f0cfba39e4047b5f94bef04&o="
          alt="featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Haifa</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/max500/850190.webp?k=0fe676bb40e282fb2978fb86489567405e08dfd630b9ad9a17c2d4a4ef7d1780&o="
          alt="featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mitzpe Ramon</h1>
          <h2>456 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/max500/654793.webp?k=741e9d678cfed288d8b9404d4856c74c3a3d33fd0727277797dfe1ba885aea3c&o="
          alt="featured"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ein Bokek</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
