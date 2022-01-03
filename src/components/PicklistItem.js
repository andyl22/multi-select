import React from "react";
import "./PicklistItem.scss";

function PicklistItem(props) {
  const capitalize = (str) => {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className="picklist-item">
      <label onClick={props.toggleCheck}>
        <input
          type="checkbox"
          value={props.value}
          name={props.value}
          defaultChecked={props.checked}
          id={props.value}
        />
        {capitalize(props.value)}
      </label>
    </div>
  );
}

export default PicklistItem;
