import {
  faGoogle,
  faHtml5,
  faJoomla,
  faSlack,
  faWordpress,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./brandsrect.css";

export default function BrandsRect() {
  return (
    <div className="brandsMain-div">
      <div className="brands-contrainer">
        <div className="brandsTxt-contrainer">
          <p>Trusted by over 100+ businesses worldwide!</p>
        </div>
        <div className="brandsIcon-contrainer">
          <FontAwesomeIcon icon={faWordpress} className="brandsLogo-Icons" />
          <FontAwesomeIcon icon={faSlack} className="brandsLogo-Icons" />
          <FontAwesomeIcon icon={faGoogle} className="brandsLogo-Icons" />
          <FontAwesomeIcon icon={faYahoo} className="brandsLogo-Icons" />
          <FontAwesomeIcon icon={faJoomla} className="brandsLogo-Icons" />
          <FontAwesomeIcon icon={faHtml5} className="brandsLogo-Icons" />
        </div>{" "}
      </div>
    </div>
  );
}
