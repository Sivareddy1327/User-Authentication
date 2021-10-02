import React from "react";
import axios from "axios";
import Formdata from "./Formdata";

const Editdata = (props) => {
  const { title, body, _id, handleToggle, editItem, Toggle } = props;

  const formSubmission = (title) => {
    axios
      .put(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, title, {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        editItem(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <Formdata
        title={title}
        body={body}
        formSubmission={formSubmission}
        Toggle={Toggle}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Editdata;
