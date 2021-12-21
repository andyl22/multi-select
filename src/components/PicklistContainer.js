import React from "react";
import PicklistItem from "./PicklistItem";

function PicklistContainer(props) {
  const { checked, setChecked } = props;

  const findOrAddCheckedItem = (e) => {
    if (checked.includes(e.target.value)) {
      setChecked(checked.filter((x) => x !== e.target.value));
    } else {
      if(e.target.value===undefined) return;
      setChecked([...checked, e.target.value]);
    }
  };

  const renderPicklistOptions = () => {
    console.log(props.picklistOptions);
    return props.picklistOptions.map((option) => (
      <PicklistItem
        key={option}
        value={option}
        toggleCheck={findOrAddCheckedItem}
        checked={checked.includes(option)}
      />
    ));
  };

  return <div className="picklist-container">{renderPicklistOptions()}</div>;
}

export default PicklistContainer;
