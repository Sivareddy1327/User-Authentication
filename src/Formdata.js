import React, { useState } from "react";

const Formdata = (props) => {
  const {
    formSubmission,
    handleToggle,
    Toggle,
    title: dataTitle,
    body: dataBody,
  } = props;

  const [title, settitle] = useState(dataTitle ? dataTitle : "");
  const [body, setbody] = useState(dataBody ? dataBody : "");

  const handlechangetitle = (e) => {
    settitle(e.target.value);
  };
  const handlechangebody = (e) => {
    setbody(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdData = {
      title: title,
      body: body,
    };
    formSubmission(formdData);
    settitle("");
    setbody("");
    if (Toggle) {
      handleToggle();
    }
  };
  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <br />
        <input type="text" value={title} onChange={handlechangetitle} />
        <br />
        <label>body</label>
        <br />
        <input type="text" value={body} onChange={handlechangebody} />
        <br />
        <input type="submit" value="save" />
      </form>
    </div>
  );
};

export default Formdata;
