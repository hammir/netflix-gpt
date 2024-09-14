import React, { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/Validate";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage,setErrorMessage] = useState("");

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

const handlerFunction = ()=>{
  //validate the form data
  
  console.log(email.current.value);
  console.log(password.current.value);
  const message = validation(email.current.value , password.current.value);

  setErrorMessage(message);
}

  return (
    <div>
      <Header />

      <div className="absolute z-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        ></img>
      </div>

      <form
      onSubmit={(e)=>{e.preventDefault();}}
       className="w-3/12 p-12 bg-black text-white my-36  mx-auto absolute left-0 right-0 rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Full Name Field */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-4 my-4 w-full bg-gray-700 "
          ></input>
        )}

        {/* Email Field */}
        <input
          ref={email}
          className=" p-4 my-4 w-full bg-gray-700 "
          type="email"
          placeholder="Email Address"
        ></input>

        {/* Password Field */}
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700 "
          type="password"
          placeholder="Password"
        ></input>

        {/* Sign In / Sign up button */}
        <button 
        onClick={handlerFunction}
         className="bg-red-700 p-4 my-6 w-full rounded-lg  ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        {/* Error message */}
        <p className="text-red-600 font-bold text-lg py-3  ">{errorMessage}</p>

        <p className="cursor-pointer " onClick={toggleSignIn}>
          <span className="text-gray-400 ">
            {isSignInForm ? "New to Netflix ? " : "Already Registered, "}
          </span>
          <span className="text-white font-bold hover:underline">
            {isSignInForm ? "Sign Up Now." : "Sign In Now."}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
