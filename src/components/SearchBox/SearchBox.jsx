import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from './SearchBox.module.css'
const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
      className={s.input}
        type="search"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Пошук"
        name="filter"
      />
    </div>
  );
};

export default SearchBox;
