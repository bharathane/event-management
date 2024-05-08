import { headerButtonType } from "../PropsTypes";
import { Link } from "react-router-dom";
import "./index.css";
const HeaderButton = ({
  id,
  name,
  getId,
  isActiveId,
  navigate,
}: headerButtonType) => {
  //to send Id of Active Button
  const sendId = () => {
    getId?.(id);
  };

  return (
    <Link to={`${navigate}`} style={{ textDecoration: "none" }}>
      <li
        className={`header-li ${isActiveId && "acive-color"}`}
        onClick={sendId}
      >
        <h1>{name}</h1>
      </li>
    </Link>
  );
};
export default HeaderButton;
