import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";
import Mynotes from "./Mynotes";

const Nav = (props) => {
  const { userLoggedIn, handleAuth } = props;

  return (
    <div>
      <Link to="/">Home</Link>|
      {userLoggedIn ? (
        <>
          <Link to="/account">Account</Link>|<Link to="/mynotes">My Notes</Link>
          |
          <Link
            to="/"
            onClick={() => {
              alert("successfully logout");
              localStorage.removeItem("token");
              handleAuth();
              props.history.push("/");
            }}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>|<Link to="/login">Login</Link>
        </>
      )}
      <Route path="/" component={Home} exact={true} />
      <Route path="/register" component={Register} />
      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} handleAuth={handleAuth} />;
        }}
      />
      <Route path="/account" component={Account} />
      <Route path="/mynotes" component={Mynotes} />
    </div>
  );
};

//const wrapped = withRouter(Nav)
export default withRouter(Nav);
