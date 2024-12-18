import Pinkbtn from "./components/Pinkbtn";
import NavbarS from "./components/Navbar";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgComp from "./components/ImgComp";
import Img1 from "./assets/Img1.png";
import AngleBtn from "./components/AngleBtn";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [dimensions, setDimensions] = useState({
    top: GetTop(),
    left: Getleft(),
  });
  const [dimensionsback, setDimensionsback] = useState({
    top: GetbackTop(),
    left: Getbackleft(),
  });

  function Getleft() {
    if (window.innerWidth < 768) return "50px";
    if (window.innerWidth < 992) return "75px";
    return "10px";
  }

  function GetTop() {
    if (window.innerWidth < 768) return "25px";
    if (window.innerWidth < 992) return "50px";
    return "10px";
  }
  function GetbackTop() {
    if (window.innerWidth < 768) return "50px";
    if (window.innerWidth < 992) return "75px";
    return "50px";
  }
  function Getbackleft() {
    if (window.innerWidth < 768) return "100px";
    if (window.innerWidth < 992) return "150px";
    return "50px";
  }

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        top: Getleft(),
        left: GetTop(),
      });
      setDimensionsback({
        top: GetbackTop(),
        left: Getbackleft(),
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Homepage-div">
      <NavbarS />
      <div className="HTopcontainer-div">
        <div className="HText-div">
          <h1>Launch a software businesses website today with us!</h1>
          <p>
            Launch a business today with our help and get it done with amazing
            launch features, websites and more with uifry. We help business like
            yours thrive every day and beyond.
          </p>
          <div className="HTextConbtn-div">
            <Pinkbtn text="Contact Now" height="50px" width="180px" />
            <AngleBtn />
            <p>Book a Demo Today</p>
          </div>
          <div className="HTextCRatebtn-div">
            <Pinkbtn
              text={<FontAwesomeIcon icon={faStar} fontSize="24px" />}
              height="50px"
              width="50px"
            />
            <p>Rated 4.9 out of 1200 reviews</p>
          </div>
        </div>
        <div className="Himg-div">
          <ImgComp
            Img={Img1}
            stop={dimensions.top}
            sleft={dimensions.left}
            btop={dimensionsback.top}
            bleft={dimensionsback.left}
          />
        </div>
      </div>
    </div>
  );
}
