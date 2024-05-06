import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import HeaderButton from "../HeaderButton";

import "./index.css";
const headerObj = [
  { id: uuidv4(), name: "EVENTS", navigate: "/events" },
  { id: uuidv4(), name: "PROJECTS", navigate: "/projects" },
  { id: uuidv4(), name: "PRODUCT OWNERS", navigate: "/producs" },
  { id: uuidv4(), name: "BLOGS", navigate: "/blogs" },
  { id: uuidv4(), name: "REGISTER", navigate: "/" },
];

const Header = () => {
  const [headerBtn, setHeaderBtn] = useState<string>(headerObj[4].id);
  const getId = (id: string) => {
    setHeaderBtn(id);
  };
  return (
    <div className="header-container">
      <ul className="header-ul">
        {headerObj.map((each) => (
          <HeaderButton
            name={each.name}
            id={each.id}
            key={each.id}
            getId={getId}
            isActiveId={headerBtn === each.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Header;
