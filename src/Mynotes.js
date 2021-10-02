import React, { useState, useEffect } from "react";
import Container from "./Container";
import axios from "axios";

const Mynotes = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://dct-user-auth.herokuapp.com/api/notes", {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        setdata(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const addItem = (note) => {
    const newNotes = [note, ...data];
    setdata(newNotes);
  };

  const removeItem = (d) => {
    const result = data.filter((ele) => {
      return ele._id != d._id;
    });
    setdata(result);
  };

  const editItem = (notes) => {
    const result = data.map((ele) => {
      if (ele._id == notes._id) {
        return { ...ele, ...notes };
      } else {
        return { ...ele };
      }
    });
    setdata(result);
  };

  return (
    <div>
      <h1>My notes-{data.length}</h1>
      <Container
        data={data}
        addItem={addItem}
        removeItem={removeItem}
        editItem={editItem}
      />
    </div>
  );
};

export default Mynotes;
