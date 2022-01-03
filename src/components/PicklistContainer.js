import React from "react";
import PicklistItem from "./PicklistItem";
import "./PicklistContainer.scss";

function PicklistContainer(props) {
  const { checked, setChecked } = props;

  const findOrAddCheckedItem = (e) => {
    console.log("Fired")
    // Check if selected element is the parent node of the checkbox/label. If not, ascend until parent node is selected.
    let target = e.target;
    if(![...target.classList].includes("picklist-item")) {
      target = e.target.parentNode;
    } else {
      e.target.checked = !e.target.checked;
      console.log(!e.target.checked)
    }
    const targetValue = target.firstChild.value;

    // Check if the value is already checked. Toggle the indicator if so.
    if (checked.includes(targetValue)) {
      setChecked(checked.filter((x) => x !== targetValue));
    } else {
      if(targetValue===undefined) return;
      setChecked([...checked, targetValue]);
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
