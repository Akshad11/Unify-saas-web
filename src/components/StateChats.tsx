import BarComp from "./BarComp";
import "./statechat.css";

export default function StateChats() {
  return (
    <div className="StateChats-div">
      <h4 className="StateHeader">New visitors</h4>
      <div className="Statetext-div">
        <h2>84%</h2> <p>+0.4%</p>
      </div>
      <BarComp />
    </div>
  );
}
