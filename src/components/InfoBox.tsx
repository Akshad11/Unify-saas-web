import ImgComp from "./ImgComp";

import "./infobox.css";
import InfoAddBox from "./InfoAddBox";

interface MyInfoBoxData {
  choice: number;
  isLeft: boolean;
  Img: string;
}

export default function InfoBox({ choice, isLeft, Img }: MyInfoBoxData) {
  return (
    <div className="InfoBoxMain-div">
      <div
        className={
          isLeft ? "InfoWrapper-div rightdata" : "InfoWrapper-div leftdata "
        }
      >
        <div className="InfoImg-Div">
          <ImgComp
            stop="150px"
            sleft="60%"
            btop="50px"
            bleft="50px"
            Img={Img}
          />
        </div>
        <div className="InfoText-Div">
          <h1 className="InfoHeaderText">
            Let your business thrive under our supervision
          </h1>
          <p className="InfoParaText">
            Launch a business today with our help and get it done with amazing
            launch features, websites and more with uifry. We help business like
            yours thrive every day and beyond.
          </p>
          <p className="InfoHighlightedText">
            We are making every business grow!
          </p>
          <div className="InfoAdd-div"></div>
          <InfoAddBox choice={choice} />
        </div>
      </div>
    </div>
  );
}
