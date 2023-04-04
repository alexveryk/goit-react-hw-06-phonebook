// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterContainer } from './Filter.styled';
import { FilterLabel } from './Filter.styled';
import { FilterInput } from './Filter.styled';
// import { useSelector } from 'react-redux';
// import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  const handleFilterChange = filter => dispatch(setFilter(filter));

  const handleIputСhange = event => {
    handleFilterChange(event.currentTarget.value);
  };

  const idForm = nanoid(5);

  return (
    <FilterContainer>
      <FilterLabel htmlFor={idForm}>Find contacts by name</FilterLabel>
      <FilterInput type="text" id={idForm} onChange={handleIputСhange} />
    </FilterContainer>
  );
};

// export const Filter = ({ onChange, filterValue }) => {
//   const idForm = nanoid(5);
//   return (
//     <FilterContainer>
//       <FilterLabel htmlFor={idForm}>Find contacts by name</FilterLabel>
//       <FilterInput
//         type="text"
//         id={idForm}
//         value={filterValue}
//         onChange={onChange}
//       />
//     </FilterContainer>
//   );
// };

// Filter.prototype = {
//   onChange: PropTypes.func.isRequired,
//   filterValue: PropTypes.string.isRequired,
// };
