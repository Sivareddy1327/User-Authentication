import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) handleAuth();
  }, []);
  return (
    <div>
      <h1>User Auth</h1>
      <Nav userLoggedIn={userLoggedIn} handleAuth={handleAuth} />
    </div>
  );
};

export default App;
