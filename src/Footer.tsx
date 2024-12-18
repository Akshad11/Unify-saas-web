import {
  faFacebook,
  faInstagramSquare,
  faSquareWhatsapp,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./assets/Logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="Footermain-div">
      <div className="FooterWrapper1">
        <img src={logo} alt="Logo" />
        <div className="footerNav-div">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
          <div className="footerNavli-div">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitterSquare} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faSquareWhatsapp} />
          </div>
        </div>
      </div>
      <div className="FooterWrapper2">
        <p>All rights reserved ® uifry.com | Terms and conditions apply!</p>
        <div className="footerNav2-div">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitterSquare} />
          <FontAwesomeIcon icon={faInstagramSquare} />
          <FontAwesomeIcon icon={faSquareWhatsapp} />
        </div>
      </div>
    </div>
  );
}
