import { v4 as uuidv4 } from "uuid";
import HeaderButton from "../HeaderButton";

import "./index.css";
const headerObj = [
  { id: uuidv4(), name: "EVENTS" },
  { id: uuidv4(), name: "PROJECTS" },
  { id: uuidv4(), name: "PRODUCT OWNERS" },
  { id: uuidv4(), name: "BLOGS" },
  { id: uuidv4(), name: "REGISTER" },
];

const Header = () => {
  return (
    <div className="header-container">
      <ul className="header-ul">
        {headerObj.map((each) => (
          <HeaderButton name={each.name} id={each.id} key={each.id} />
        ))}
      </ul>
    </div>
  );
};

export default Header;
