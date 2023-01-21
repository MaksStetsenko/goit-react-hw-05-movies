import React from 'react';
import PropTypes from 'prop-types';

import { FormStyled, InputStyled, ButtonStyled } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  return (
    <FormStyled onSubmit={onSubmit} autoComplete="off">
      <InputStyled type="text" name="Search"></InputStyled>
      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
