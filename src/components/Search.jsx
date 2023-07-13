import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [value, setValue] = useState('');
  const onEnterInSearch = (e) => {
    if (e.charCode === 13) props.searchText(e.target.value);
  };
  return (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search !text-neutral-500" />
        <InputText
          className="!bg-white !rounded-md !text-gray-700"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => onEnterInSearch(e)}
        />
      </span>
    </div>
  );
};
Search.propTypes = {
  searchText: PropTypes.func.isRequired
};
export default Search;
