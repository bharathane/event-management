import Header from "../Header";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CalenderCom from "../CalenderCom";
import { useState } from "react";

import "./index.css";
import { eachHourOfInterval } from "date-fns";
const timingObj = [
  { id: uuidv4(), text: "11:00", amount: "$40" },
  { id: uuidv4(), text: "11:00", amount: "$40" },
  { id: uuidv4(), text: "11:00", amount: "$40" },
  { id: uuidv4(), text: "11:00", amount: "$40" },
  { id: uuidv4(), text: "11:00", amount: "$40" },
];
const Calender = () => {
  const [idForTIme, setIdForTime] = useState<string>("");

  const getIdFOrBtn = (id: string) => {
    setIdForTime(id);
  };
  return (
    <>
      <div>
        <Header />
        <h1 style={{ textAlign: "center", margin: "10px" }}>
          KRL MARKS ROOMS
        </h1>
        <div className="calender-parent">
          <div className="checkOut-days">
            <h3>CHECK OUT DAYS</h3>
            <br className="br-tag" />
            <br className="br-tag" />
            <br className="br-tag" />
            <p>THERE IS NO RESERVESION YET</p>
            <Link to="/reserve">
              <button type="button" className="reverse">
                RESERVE WITH $80
              </button>
            </Link>
          </div>
          <hr />
          <div className="calender-flex">
            <div>
              <h2>SELECT A DATE & TIME</h2>
              <CalenderCom idOF={idForTIme} />
            </div>

            <ul className="date-timings">
              {timingObj.map((each) => (
                <li
                  key={each.id}
                  className={`time-list`}
                  onClick={() => getIdFOrBtn(each.id)}
                >
                  <button
                    type="button"
                    className={`time-button ${
                      idForTIme === each.id ? "backColor-active" : ""
                    }`}
                  >
                    <p>{each.text}</p>
                    <p>{each.amount}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Calender;
