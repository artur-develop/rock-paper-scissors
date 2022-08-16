import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as ls from "./../../utils/localStorage";

const Login = () => {
  const [username, setUsername] = useState<string>("unnamed");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = () => {
    if (username) {
      ls.setUsername(username);
      navigate("/game");
    }
  };

  return (
    <div className={"container"}>
      <div className={"box main"}>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
