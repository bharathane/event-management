import { Link } from "react-router-dom";
import Header from "../Header";
import gsap from "gsap";
import { useEffect } from "react";
import AllianFooter from "../AllianFooter";
import "./index.css";
const Details = () => {
  // To render Component Indipendently from the previous scroll value
  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo(
      ".the-job",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 2 }
    );
    gsap.fromTo(
      ".venue-big-img",
      {
        x: -500,
      },
      { x: 0, duration: 1 }
    );
    gsap.fromTo(
      ".venue-content",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 1 }
    );

    gsap.fromTo(
      "#KrlRoom",
      {
        x: -800,
      },
      { x: 0, duration: 1 }
    );
  });
  return (
    <div>
      <Header />

      <h1 className="the-job">THE JOB HUNTING ACCELERATOR BOOTCAMP</h1>
      <div className="venue-details">
        <div className="wrapper-venudetails-photo">
          <img
            src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1714821746/Rectangle_124_bcesui.png"
            alt="event"
            className="venue-big-img"
          />
          <div className="venue-content">
            <p>CATEGORY : WEDDING</p>

            <p>VENUE : INNOLAND INCOBA & COWORKING CENTER</p>

            <p>
              PRICE : &nbsp;&nbsp;
              <button type="button" className="price-button">
                $65
              </button>{" "}
              <span> / per hour</span>
            </p>
          </div>
        </div>
      </div>
      <div className="krl-rooms">
        <div className="child-krl-rooms">
          <hr className="hr-krlm" />
          <h1 style={{ textAlign: "center", margin: "10px" }} id="KrlRoom">
            KRL MARKS ROOMS
          </h1>
          <hr />
          <div className="rooms-container">
            <ul>
              <h1 className="includes-h1">INCLUDES</h1>
              <li>40 Seats</li>
              <li>3 Monitors</li>
              <li>Unlimited water</li>
              <li>A Sofa</li>
            </ul>
            <div>
              <img
                src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1714821746/Rectangle_124_bcesui.png"
                alt="rooms"
                className="rooms-image"
              />
              <img
                src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1714821746/Rectangle_124_bcesui.png"
                alt="rooms"
                className="rooms-image"
              />
              <img
                src="https://res.cloudinary.com/dr2jqbir9/image/upload/v1714821746/Rectangle_124_bcesui.png"
                alt="rooms"
                className="rooms-image"
              />
            </div>
          </div>
          <div style={{ marginTop: "30px" }} className="additional-container">
            <div>
              <h1 style={{ marginLeft: "23px" }}>ADDITIONAL</h1>
              <ul>
                <li style={{ listStyle: "none" }}>
                  <input type="checkbox" id="checkBox1" />
                  <label htmlFor="checkBox1"> Coffe Break</label>
                </li>
                <li style={{ listStyle: "none" }}>
                  <input type="checkbox" id="checkBox2" />
                  <label htmlFor="checkBox2"> Making Video</label>
                </li>
                <li style={{ listStyle: "none" }}>
                  <input type="checkbox" id="checkBox3" />
                  <label htmlFor="checkBox3"> Promotions</label>
                </li>
                <li style={{ listStyle: "none" }}>
                  <input type="checkbox" id="checkBox4" />
                  <label htmlFor="checkBox4"> Extra Seats</label>
                </li>
              </ul>
            </div>
            <div>
              <h1 style={{ marginTop: "30px" }}>CALENDER</h1>
              <Link to="/calender" state={{ TextDecoder: "none" }}>
                <p className="calender-link">SEE AVAILABLE DATES</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AllianFooter />
    </div>
  );
};

export default Details;
