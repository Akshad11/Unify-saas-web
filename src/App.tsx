import AchieveBox from "./AchieveBox";
import BrandsRect from "./BrandsRect";
import InfoBox from "./components/InfoBox";
import HomePage from "./Homepage";
import Img2 from "./assets/Img2.png";
import Img3 from "./assets/Img3.png";
import Img4 from "./assets/Img4.png";
import "./styles.css";
import Updates from "./Updates";
import FAQScreen from "./FAQScreen";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <HomePage />
      <BrandsRect />
      <InfoBox choice={1} isLeft={true} Img={Img2} />
      <AchieveBox />
      <InfoBox choice={2} isLeft={false} Img={Img3} />
      <Updates />
      <InfoBox choice={3} isLeft={false} Img={Img4} />
      <AchieveBox />
      <FAQScreen />
      <Footer />
    </div>
  );
}
