import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';

const Search = (props) => {
  const [value, setValue] = useState();
  props.searchText(value);
  return (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search !text-neutral-500" />
        <InputText
          className="!bg-white !rounded-md !text-gray-700"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </span>
    </div>
  );
};
Search.propTypes = {
  searchText: PropTypes.string.isRequired
};
export default Search;
