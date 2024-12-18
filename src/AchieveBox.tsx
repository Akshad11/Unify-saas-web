import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./achievebox.css";

export default function AchieveBox() {
  return (
    <div className="AchMain-div">
      <div className="AchWrapper-div">
        <div className="Ach2check">
          <div className="Ach2checkIcon">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <p>Super useful and easy to with over 100+ customisations!</p>
        </div>
        <div className="Ach2check">
          <div className="Ach2checkIcon">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <p>Super useful and easy to with over 100+ customisations!</p>
        </div>
        <div className="Ach2check">
          <div className="Ach2checkIcon">
            <FontAwesomeIcon icon={faSquareCheck} />
          </div>
          <p>Super useful and easy to with over 100+ customisations!</p>
        </div>
      </div>
    </div>
  );
}
