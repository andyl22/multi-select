import React from "react";

function PicklistItem(props) {
  const capitalize = (str) => {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className="picklist-item" onClick={props.toggleCheck}>
      <input
        type="checkbox"
        value={props.value}
        name={props.value}
        defaultChecked={props.checked}
      />
      <label htmlFor={props.value}>{capitalize(props.value)}</label>
    </div>
  );
}

export default PicklistItem;
