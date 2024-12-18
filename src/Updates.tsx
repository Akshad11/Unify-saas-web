import UpdateCard from "./components/UpdateCard";
import "./updates.css";
import Img7 from "./assets/Img7.png";
import Img5 from "./assets/Img5.png";
import Img6 from "./assets/Img6.png";

export default function Updates() {
  return (
    <div className="UpdatesMain-div">
      <h1 className="UpdatesH1">Our latest updates for you here!</h1>
      <p className="Updatesp">Whats heppening around the World.</p>
      <div className="UpdatesCardview-div">
        <UpdateCard
          Img={Img7}
          CardType={"Growth"}
          Header={"15 ways to grow your saas in 21 days with no money"}
        />
        <UpdateCard
          Img={Img6}
          CardType={"Career"}
          Header={
            "9 ways to make it quick and never look back again in your life"
          }
        />
        <UpdateCard
          Img={Img5}
          CardType={"Design"}
          Header={"Why everyone is moving today to subscribtions"}
        />
      </div>
    </div>
  );
}
