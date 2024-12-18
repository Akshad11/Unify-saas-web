import AngleBtn from "./AngleBtn";
import "./updatecard.css";

interface MyUpdateCard {
  Img: string;
  CardType: string;
  Header: string;
}

export default function UpdateCard({ Img, CardType, Header }: MyUpdateCard) {
  return (
    <div className="UpdateCardMain-div">
      <img src={Img} className="UpdateCardImg" alt="TablePhoto" />
      <div className="UpdateCardText-div">
        <p className="UpdateCardp">{CardType}</p>
        <h3 className="UpdateCardH3">{Header}</h3>
        <AngleBtn />
      </div>
    </div>
  );
}
