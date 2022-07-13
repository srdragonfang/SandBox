import React from "react";
const SocialBar = () => {
  return (
    <div className="socialBar-bg">
      <div className="socialBar flex-row">
        <h1 className="socialBar-logo">sokunmaru</h1>
        <div className="socialBar-data">
          <div className="socialBar-item">
            <a href="https://www.github.com/srdragonfang">github</a>
          </div>
          <div className="socialBar-item">
            <a href="https://www.instagram.com/srdragonfang">instagram</a>
          </div>
        </div>
      </div>
      <div className="socialBar-contact flex-col">
        <p>Contact Us</p>
        <h3>sokunmaru@hotmail.com</h3>
      </div>
    </div>
  );
};

export default SocialBar;
