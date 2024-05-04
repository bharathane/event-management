import { headerButtonType } from "../PropsTypes";
import "./index.css";
interface porpsTypesForFilter {
  single: headerButtonType;
  getCategory: (name: string) => void;
}

const HomeFilterButton = (props: porpsTypesForFilter) => {
  const { single, getCategory } = props;
  const callParentFunc = () => {
    getCategory(single.name);
  };

  return (
    <li className="home-filter-li">
      <button type="button" onClick={callParentFunc} className="home-fliter-h1">
        {single.name}
      </button>
    </li>
  );
};

export default HomeFilterButton;
