import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>123 My Location.</p>
              <p>Portland, OR </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              (***) ***-****
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              atorrez007@protonmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            I am a fullstack developer. <br></br>I enjoy creating concepts for
            my clients. <br></br>Also, I enjoy 80s nostalgia and drinking
            <br></br>high-quality espresso.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/atorrez007/">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>

            <a href="https://github.com/atorrez007">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/elonmusk">
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
