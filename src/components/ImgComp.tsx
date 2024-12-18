import "./imgcomp.css";
import StateChats from "./StateChats";

interface MyImgCom {
  btop: string;
  bleft: string;
  stop: string;
  sleft: string;
  Img: string;
}

export default function ImgComp({ stop, sleft, btop, bleft, Img }: MyImgCom) {
  return (
    <div className="warpper-div">
      <div className="Imbar-div" style={{ top: stop, left: sleft }}>
        <StateChats />
      </div>
      <div className="ImImg-div">
        <img src={Img} alt="Descriptive alt text here" />
      </div>
      <div className="ImbackBox-div" style={{ top: btop, left: bleft }}></div>
    </div>
  );
}
