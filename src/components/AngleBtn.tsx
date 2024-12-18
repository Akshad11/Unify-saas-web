import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AngleBtn() {
  const Style = { padding: "20px", borderRadius: "10px", border: "0cap" };
  return (
    <button type="submit" style={Style} className="HtextCbtnArrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
}
