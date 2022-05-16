import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/687157.webp?k=06b9ded0733baaca9efaa06a69ae4d0d74311d620280947ae909015e804028fb&o" alt="featured"
          className="featuredImage"
        />
        <div className="featuredTitles"></div>
      </div>
    </div>
  );
};

export default Featured;
