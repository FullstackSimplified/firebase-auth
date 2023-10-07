import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import GoogleButton from "./googleButton";
import { useUserContext } from "../context/userContext";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  const { signInWithGoogle } = useUserContext();

  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <GoogleButton onClick={signInWithGoogle}>
        Continue with Google
      </GoogleButton>
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
};

export default Auth;
