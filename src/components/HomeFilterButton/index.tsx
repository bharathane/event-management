import { headerButtonType } from "../PropsTypes";
import "./index.css";
interface porpsTypesForFilter {
  single: headerButtonType;
  getCategory: (name: string) => void;
  getIdForFilter: (id: string) => void;
  isFilterBtnActive: boolean;
}

const HomeFilterButton = (props: porpsTypesForFilter) => {
  const { single, getCategory, getIdForFilter, isFilterBtnActive } = props;
  const callParentFunc = () => {
    getCategory(single.name);
    getIdForFilter(single.id);
  };

  return (
    <li className={`home-filter-li ${isFilterBtnActive && "acive-color"}`}>
      <button
        type="button"
        onClick={callParentFunc}
        className={`home-fliter-h1 ${isFilterBtnActive && "acive-color"}`}
      >
        {single.name}
      </button>
    </li>
  );
};

export default HomeFilterButton;
