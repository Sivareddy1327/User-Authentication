import React from "react";
import Adddata from "./Adddata";
import Datalist from "./Datalist";

const Container = (props) => {
  const { data, addItem, removeItem, editItem } = props;

  return (
    <div>
      <Datalist data={data} removeItem={removeItem} editItem={editItem} />
      <Adddata addItem={addItem} />
    </div>
  );
};

export default Container;
