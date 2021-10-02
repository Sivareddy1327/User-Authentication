import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = (props) => {
  const [userinfo, setuserinfo] = useState({});

  useEffect(() => {
    axios
      .get("http://dct-user-auth.herokuapp.com/users/account", {
        headers: { "x-Auth": localStorage.getItem("token") },
      })
      .then((response) => {
        const result = response.data;
        setuserinfo(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      <h1>User Account</h1>
      <p>Email-{userinfo.email}</p>
      <p>Username-{userinfo.username}</p>
    </div>
  );
};

export default Account;
