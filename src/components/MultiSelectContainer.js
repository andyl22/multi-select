import React, { useState, useEffect, useRef } from "react";
import PicklistContainer from "./PicklistContainer";
import PicklistSearchInput from "./PicklistSearchInput";

function MultiSelectContainer() {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState([]);
  const [originalPicklistData, setOriginalPicklistData] = useState([]);
  const [picklistOptions, setPicklistOptions] = useState([]);
  const picklistRef = useRef();

  useEffect(() => {
    fetchData()
      .then(data => {
        setOriginalPicklistData(data)
        setPicklistOptions(data)
      })
      .catch(err => console.log(err))
  },[]);

 const fetchData = async () => {
   const res = await fetch('http://localhost:3000/categories/api')
   let data = await res.json();
   data = data.category_list.map(category => category.name);
   return data;
  }

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!picklistRef.current.contains(e.target)) {
        setExpanded(false);
      }
    });
  });

  return (
    <div className="multi-select-container" ref={picklistRef}>
      <div>{checked}</div>
      <PicklistSearchInput
        isExpanded={expanded}
        setExpand={setExpanded}
        picklistOptions={originalPicklistData}
        setPicklistOptions={setPicklistOptions}
        expanded={expanded}
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
