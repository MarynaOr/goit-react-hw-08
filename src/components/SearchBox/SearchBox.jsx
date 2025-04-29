import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import s from "./SearchBox.module.css";
const SearchBox = () => {
  const dispatch = useDispatch();

  const selectFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div>
      <input
        className={s.input}
        type="search"
        onChange={handleChange}
        value={selectFilter}
        placeholder="Пошук"
        name="filter"
      />
    </div>
  );
};

export default SearchBox;
