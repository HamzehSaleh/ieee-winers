import React from "react";
import RandomPicker from "./RandomPicker";

function ListFilter(props) {
  const namesList = [];

  for (let i = 0; i < props.items.length; i++) {
    namesList.push(props.items[i].name);
  }

  return <RandomPicker items={namesList} />;
}

export default ListFilter;
