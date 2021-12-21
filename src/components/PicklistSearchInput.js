import React, { useState } from "react";

function PicklistSearchInput(props) {
  const [value, setValue] = useState('');

  function toggleExpand() {
    if(!props.expanded) {
      props.setExpand(true);
    }
  }

  function filterList(e) {
    toggleExpand();
    const searchInput = e.target.value;
    const filteredOptions = props.picklistOptions.filter((text) =>
      text.includes(searchInput)
    );
    props.setPicklistOptions(filteredOptions);
  }

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="picklist-search-input-container">
      <input
        type="text"
        className="picklist-input"
        value = {value}
        placeholder="Choose Option(s)"
        onChange={handleChange}
        onClick={toggleExpand}
        onKeyUp={filterList}
      />
    </div>
  );
}

export default PicklistSearchInput;
