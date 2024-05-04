import Header from "../Header";
import { v4 as uuidv4 } from "uuid";
import CalenderCom from "../CalenderCom";

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
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", margin: "10px" }}>KARL MARKS ROOMS</h1>
      <div className="calender-parent">
        <div>
          <h3>CHECK OUT DAYS</h3>
          <br />
          <br />
          <br />
          <p>THERE IS NO RESERVESION YET</p>
          <button type="button" className="reverse">
            REVERSE WITH $80
          </button>
        </div>
        <hr />
        <div className="calender-flex">
          <div>
            <h2>SELECT A DATE & TIME</h2>
            <CalenderCom />
          </div>

          <ul>
            {timingObj.map((each) => (
              <li key={each.id} className="time-list">
                <button type="button" className="time-button">
                  <p>{each.text}</p>
                  <p>{each.amount}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Calender;
