import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import Editdata from "./Editdata";

Modal.setAppElement("#root");
const DataItem = (props) => {
  const { _id, title, body, user, removeItem, editItem } = props;

  const [Toggle, setToggle] = useState(false);
  const [modaldata, setModaldata] = useState({});
  const [modalIsopen, setModalIsopen] = useState(false);

  const handlechangeremove = (_id) => {
    const confirmremove = window.confirm("Are you sure?");
    if (confirmremove) {
      axios
        .delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
          headers: { "x-auth": localStorage.getItem("token") },
        })
        .then((response) => {
          const result = response.data;
          removeItem(result);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const handlealert = (_id) => {
    axios
      .get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
        headers: { "x-auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        setModaldata(result);
        setModalIsopen(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleToggle = () => {
    const result = !Toggle;
    setToggle(result);
  };

  const handlechangeclose = () => {
    setModalIsopen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsopen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => {
          setModalIsopen(false);
        }}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h1>
          <b>Title</b>-{modaldata.title}
        </h1>
        <h1>
          <b>Body</b>-{modaldata.body}
        </h1>
        <button onClick={handlechangeclose}> close </button>
      </Modal>
      {Toggle ? (
        <>
          <Editdata
            title={title}
            body={body}
            _id={_id}
            Toggle={Toggle}
            handleToggle={handleToggle}
            editItem={editItem}
          />
          <button onClick={handleToggle}> cancel </button>
        </>
      ) : (
        <>
          <h1
            onClick={() => {
              handlealert(_id);
            }}
          >
            {title}
          </h1>
          <button onClick={handleToggle}> edit </button>

          <button
            onClick={() => {
              handlechangeremove(_id);
            }}
          >
            {" "}
            remove{" "}
          </button>
        </>
      )}
    </div>
  );
};

export default DataItem;
