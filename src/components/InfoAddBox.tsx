import {
  faPaperPlane,
  faSquareCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AngleBtn from "./AngleBtn";
import "./infoaddbox.css";
import Pinkbtn from "./Pinkbtn";

interface MyInfoAddBoxData {
  choice: number;
}

export default function InfoAddBox({ choice }: MyInfoAddBoxData) {
  return (
    <div className="InfoAddMain-div">
      <div className="AddCheck-div">
        {choice == 1 ? (
          <div className="Add2CheckText-div">
            <div className="Add2check">
              <div className="Add2checkIcon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <p>Super useful and easy to use interface</p>
            </div>
            <div className="Add2check">
              <div className="Add2checkIcon">
                <FontAwesomeIcon icon={faSquareCheck} />
              </div>
              <p>Super useful and easy to use interface</p>
            </div>
            <Pinkbtn text={"Contact Now >"} width={"190px"} height={"60px"} />
          </div>
        ) : null}
        {choice == 2 ? (
          <div className="Add2InputText-div">
            <div>
              <FontAwesomeIcon icon={faUser} className="AddInputIcon1" />
              <input
                type="Text"
                className="AddInput1"
                placeholder="Full Name"
              />
            </div>
            <div>
              <FontAwesomeIcon icon={faPaperPlane} className="AddInputIcon1" />
              <input
                type="Text"
                className="AddInput1"
                placeholder="Email Address"
              />
            </div>
            <Pinkbtn text={"Contact Now >"} width={"80%"} height={"60px"} />
          </div>
        ) : null}
        {choice == 3 ? (
          <div className="Add2CheckNumwrapper">
            <div className="Add2CheckNum-div">
              <div className="Add2checkNum">
                <div className="Add2checkIcon">
                  <FontAwesomeIcon icon={faSquareCheck} />
                </div>
                <div className="Add2checkNumText">
                  <h3> 100+</h3> <p> Successfull Projects</p>
                </div>
              </div>
              <div className="Add2checkNum">
                <div className="Add2checkIcon">
                  <FontAwesomeIcon icon={faSquareCheck} />
                </div>
                <div className="Add2checkNumText">
                  <h3> 978+</h3>
                  <p>Clients Today</p>
                </div>
              </div>
            </div>
            <div className="Add2checkNumbtn">
              <Pinkbtn height="50px" width="130px" text={"Contact"} />
              <AngleBtn /> <p>Book a Demo Today</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
