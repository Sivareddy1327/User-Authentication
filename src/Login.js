import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const { handleAuth } = props;
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleChangeemail = (e) => {
    setemail(e.target.value);
  };
  const handleChangepassword = (e) => {
    setpassword(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const formdata = {
      email: email,
      password: password,
    };
    // if  validation
    axios
      .post("http://dct-user-auth.herokuapp.com/users/login", formdata)
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          alert(result.errors);
        } else {
          alert("successfuly logged in");
          localStorage.setItem("token", result.token);
          props.history.push("/");
          handleAuth();
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={email}
          onChange={handleChangeemail}
          placeholder="enter email"
          name="email"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={handleChangepassword}
          placeholder="enter password"
          name="password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
