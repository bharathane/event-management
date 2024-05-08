import { eventsObjType } from "../PropsTypes";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
// a single event Item
const EachContainer = (props: eventsObjType) => {
  useEffect(() => {
    gsap.fromTo(
      ".each-card-li",
      {
        opacity: 0,
      },
      { opacity: 1, duration: 2 }
    );
  }, []);
  return (
    <li key={props.id} className="each-card-li">
      <Link to="/details">
        <img
          src={props.imgUrl}
          alt={props.category}
          className="each-container"
        />
      </Link>
    </li>
  );
};
export default EachContainer;
