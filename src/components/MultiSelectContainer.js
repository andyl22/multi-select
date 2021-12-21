import React, { useState, useEffect, useRef } from "react";
import PicklistContainer from "./PicklistContainer";
import PicklistSearchInput from "./PicklistSearchInput";
import "./MultiSelectContainer.scss";

function MultiSelectContainer() {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState([]);
  const [originalPicklistData, setOriginalPicklistData] = useState([]);
  const [picklistOptions, setPicklistOptions] = useState([]);
  const picklistRef = useRef();

  useEffect(() => {
    fetchData()
      .then((data) => {
        setOriginalPicklistData(data);
        setPicklistOptions(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchData = async () => {
    let data = {
      category_list: [
        {
          _id: "61a855d0ce500241198426bd",
          name: "Fantasy",
          imgURL: "/images/test.jpg",
          itemList: [],
          __v: 0,
        },
        {
          _id: "61a855d0ce500241198426c0",
          name: "Comedy",
          imgURL: "/images/test.jpg",
          itemList: [],
          __v: 0,
        },
        {
          _id: "61a855d0ce500241198426be",
          name: "Science Fiction",
          imgURL: "/images/test.jpg",
          itemList: [],
          __v: 0,
        },
        {
          _id: "61a855d0ce500241198426bf",
          name: "Horror",
          imgURL: "/images/test.jpg",
          itemList: [],
          __v: 0,
        },
        {
          _id: "61a855d0ce500241198426c2",
          name: "Dystopian",
          imgURL: "/images/test.jpg",
          itemList: [],
          __v: 0,
        },
        {
          _id: "61a855d0ce500241198426c1",
          name: "Fiction",
          imgURL: "/images/test.jpg",
          itemList: [],
          __v: 0,
        },
      ],
    };
    // const res = await fetch("http://localhost:3000/categories/api");
    // let data = await res.json();
    data = data.category_list.map((category) => category.name);
    return data;
  };

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!picklistRef.current.contains(e.target)) {
        setExpanded(false);
      }
    });
  });

  console.log(checked);

  return (
    <>
      <div className="checked">{checked.join(", ")}</div>
      <div className="multi-select-container" ref={picklistRef}>
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
    </>
  );
}

export default MultiSelectContainer;
