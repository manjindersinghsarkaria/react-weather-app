import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [value, setValue] = useState('');
  const onEnterInSearch = (e) => {
    if (e.charCode === 13) props.searchText(e.target.value);
  };
  return (
    <div className="pb-16 w-[500px]">
      <span className="p-input-icon-left w-full">
        <i className="pi pi-search !text-neutral-500" />
        <InputText
          className="!bg-white !rounded-3xl !text-gray-700 w-full"
          placeholder="Enter City"
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
