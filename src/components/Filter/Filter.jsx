import styles from './stylesFilter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for search"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
