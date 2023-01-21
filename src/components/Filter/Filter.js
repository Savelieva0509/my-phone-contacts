import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event =>
    dispatch(changeFilter(event.target.value));

  return (
    <div className={css.filter}>
      <label htmlFor="user-text" className={css.filter__label}>
        Find contact by name
      </label>

      <input
        className={css.filter__input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        name="user-text"
      />
    </div>
  );
};

export default Filter;
