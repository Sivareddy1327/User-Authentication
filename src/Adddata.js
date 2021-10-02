import React, { useMemo } from "react";
import axios from "axios";
import Formdata from "./Formdata";

const Adddata = (props) => {
  const { addItem } = props;

  const formSubmission = (data) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/api/notes", data, {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        addItem(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <Formdata formSubmission={formSubmission} />
    </div>
  );
};
export default Adddata;
