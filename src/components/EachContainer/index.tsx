import { eventsObjType } from "../PropsTypes";
import { Link } from "react-router-dom";
const EachContainer = (props: eventsObjType) => {
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
