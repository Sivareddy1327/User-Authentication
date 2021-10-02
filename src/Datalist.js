import React from "react";
import DataItem from "./DataItem";

const Datalist = (props) => {
  const { data, removeItem, editItem } = props;

  return (
    <div>
      {data.length == 0 ? (
        <>
          <h1>No Data Found</h1>
          <p>Add your First Data</p>
        </>
      ) : (
        <>
          {data.map((ele, i) => {
            return (
              <DataItem
                key={i}
                {...ele}
                removeItem={removeItem}
                editItem={editItem}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Datalist;
