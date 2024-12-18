import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface MyFAQcardData {
  que: string;
  ans: string;
}

export default function FAQCard({ que, ans }: MyFAQcardData) {
  const [isClicked, setClicked] = useState(false);

  const ChangeClick = () => {
    setClicked(!isClicked);
  };

  const faqMainStyle = {
    width: "100%",
    textAlign: "start",
  };
  const faqStyle = {
    width: "100%",
    height: "75px",
    backgroundColor: isClicked ? "rgba(60, 54, 121, 1)" : "white",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "5px",
  };

  const faqPStyle = {
    width: "70%",
    marginLeft: "20px",
    fontWeight: "bold",
    color: isClicked ? "white" : "Black",
  };
  const faqAnspStyle = {
    fontSize: "20px",
    margin: "20px",
    fontWeight: "100",
    display: isClicked ? "block" : "none",
  };

  return (
    <div className="faqMain-div" style={faqMainStyle}>
      <div className="faq-div" style={faqStyle} onClick={ChangeClick}>
        <p style={faqPStyle}>{que}</p>
        <FontAwesomeIcon
          icon={isClicked ? faMinus : faPlus}
          style={{
            fontSize: "25px",
            color: isClicked ? "white" : "black",
            marginRight: "20px",
          }}
        />
      </div>
      <p style={faqAnspStyle} className="faqAnsp">
        {ans}
      </p>
    </div>
  );
}
