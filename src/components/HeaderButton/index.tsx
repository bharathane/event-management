import { headerButtonType } from "../PropsTypes";
import "./index.css";
const HeaderButton = ({ id, name }: headerButtonType) => {
  return (
    <li className="header-li">
      <h1>{name}</h1>
    </li>
  );
};
export default HeaderButton;
