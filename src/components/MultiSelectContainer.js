import React, { useState, useEffect, useRef } from "react";
import PicklistContainer from "./PicklistContainer";
import PicklistSearchInput from "./PicklistSearchInput";

function MultiSelectContainer() {
  const originalPicklistData = ["san francisco", "new york", "buffalo", "austin", "long beach", "los angeles", "denver", "seattle"];
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState([]);
  const [picklistOptions, setPicklistOptions] = useState(originalPicklistData);
  const picklistRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!picklistRef.current.contains(e.target)) {
        setExpanded(false);
      }
    });
  });

  return (
    <div className="multi-select-container" ref={picklistRef}>
      <PicklistSearchInput
        isExpanded={expanded}
        setExpand={setExpanded}
        picklistOptions={originalPicklistData}
        setPicklistOptions={setPicklistOptions}
        expanded={expanded}
        checked={checked}
      />
      {expanded ? (
        <PicklistContainer
          checked={checked}
          setChecked={setChecked}
          picklistOptions={picklistOptions}
        />
      ) : null}
    </div>
  );
}

export default MultiSelectContainer;
