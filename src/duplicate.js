import React, { useState } from "react";
import axios from "axios";
import validator from "validator";

const Register = (props) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formerror, setformerror] = useState({});
  const error = {};
  const runvalidation = () => {
    // username
    if (username.trim().length == 0) {
      error.username = " username cannot be blank";
    } else if (username.trim().length < 5) {
      error.username = "username must be more than 5 characters";
    }
    // Email

    if (email.trim().length == 0) {
      error.email = "email cannot be blank";
    } else if (!validator.isEmail(email)) {
      error.email = "email must be siva@gmail.com in this format";
    }
    // password
    if (password.trim().length == 0) {
      error.password = "password cannot be blank";
    } else if (password.trim().length < 6 && password.trim().length > 128) {
      error.password =
        "password must more 5 character and less than 128 character ";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromdata = {
      username: username,
      email: email,
      password: password,
    };
    // if validation

    runvalidation();
    if (Object.keys(error).length == 0) {
      setformerror({});
      axios
        .post("http://dct-user-auth.herokuapp.com/users/register", fromdata)
        .then((response) => {
          const result = response.data;
          if (result.hasOwnProperty("errors")) {
            alert(result.message);
          } else {
            alert("sucessfully created an account");
            props.history.push("/login");
          }
        }) //success

        .catch((error) => {
          alert(error.message);
        }); //error
    } else {
      setformerror(error);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setusername(e.target.value);
  };
  const handleChangeemail = (e) => {
    setemail(e.target.value);
  };

  const handleChangepassword = (e) => {
    setpassword(e.target.value);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter username"
          value={username}
          onChange={handleChange}
          name="username"
        />
        <br />
        {formerror && (
          <span style={{ color: "red" }}>{formerror.username}</span>
        )}
        <br />

        <input
          type="text"
          value={email}
          placeholder="enter email"
          name="email"
          onChange={handleChangeemail}
        />
        <br />
        {formerror && <span style={{ color: "red" }}>{formerror.email}</span>}
        <br />
        <input
          type="password"
          value={password}
          placeholder="enter password"
          name="password"
          onChange={handleChangepassword}
        />
        <br />
        {formerror && (
          <span style={{ color: "red" }}>{formerror.password}</span>
        )}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
