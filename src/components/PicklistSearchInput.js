import React, { useState } from "react";

function PicklistSearchInput(props) {
  const [value, setValue] = useState('');

  function toggleExpand() {
    props.setExpand(!props.expanded);
  }

  function filterList(e) {
    if(!props.expanded) toggleExpand();
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
        placeholder={props.checked}
        onChange={handleChange}
        onClick={toggleExpand}
        onKeyUp={filterList}
      />
    </div>
  );
}

export default PicklistSearchInput;
