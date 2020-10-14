import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../UI/Input/Input";
import "./Signup.css";
import { register } from "../../store/actions/authActions";

function Signup(props) {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signupSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, userName, email, password));
  };

  return (
    <form onSubmit={(e) => signupSubmitHandler(e)}>
      <Input
        changed={(event) => setName(event.target.value)}
        label="Name"
        value={name}
      />
      <Input
        changed={(event) => setUserName(event.target.value)}
        label="Username"
        value={userName}
      />
      <Input
        changed={(event) => setEmail(event.target.value)}
        label="Email Id"
        value={email}
      />
      <Input
        changed={(event) => setPassword(event.target.value)}
        label="Password"
        value={password}
      />
      <button>Sign Up</button>
    </form>
  );
}

export default Signup;
