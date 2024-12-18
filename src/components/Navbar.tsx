import logo from "../assets/Logo.png";
import Pinkbtn from "./Pinkbtn";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function NavbarS() {
  const [isClick, setClicked] = useState(false);

  const ChangeClicked = () => {
    setClicked(!isClick);
  };
  return (
    <div className="Nav-div">
      <div className="announDiv">
        <p>This is an announcement tagline for you to insert</p>
      </div>
      <div className="NavBar-div">
        <div className="NavImg-bar">
          <img src={logo} alt="photo" />
        </div>

        <div className={isClick ? "NavUL-bar " : "NavUL-bar NavULhide1-bar"}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Blog</li>
            <div className="NavBtnhid-bar ">
              <Pinkbtn text="Contact Now" height="50px" width="180px" />
            </div>
          </ul>
        </div>

        <div className="NavBtn-bar">
          <Pinkbtn text="Contact Now" height="50px" width="180px" />
        </div>
        <div className="NavMenuBtn-bar">
          <FontAwesomeIcon
            icon={isClick ? faX : faBars}
            onClick={ChangeClicked}
          />
        </div>
      </div>
    </div>
  );
}
