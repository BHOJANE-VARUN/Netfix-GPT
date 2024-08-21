import React, { useRef, useState } from "react";
import Heading from "./Heading";
import checkvalid from "../util/validation";
import { auth } from "../util/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../util/userSlice.js";
import { BG_IMGAGE, PHOTO_URL } from "../util/Links.js";
const Login = () => {
  const dispatch = useDispatch();
  const [Sign, setSign] = useState(false);
  const [mail, setmail] = useState("Email or mobile number");
  const [spas, setpas] = useState("Password");
  const navigate = useNavigate();
  const em = useRef(null);
  const pas = useRef(null);
  const nam = useRef(null);
  const submithandle = () => {
    const obj = checkvalid(em.current.value, pas.current.value);

    if (obj.isEmailValid === false) {
      em.current.value = null;
      setmail("Invalid Email");
      return;
    }
    if (obj.isPasswordValid === false) {
      pas.current.value = null;
      setpas("Invalid Password");
      return;
    }

    if (Sign) {
      createUserWithEmailAndPassword(auth, em.current.value, pas.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
         // console.log(user);
          updateProfile(auth.currentUser, {
            displayName: nam.current.value,
            photoURL:PHOTO_URL,
          })
            .then(() => {
              // Profile updated!
              const cur = auth.currentUser;
              dispatch(addUser({uid:cur.uid,email:cur.email,displayName:cur.displayName,photoURL:cur.photoURL}));
            })
            .catch((error) => {
              // An error occurred
              // ...
              navigate("/error")
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          em.current.value = null;
          setmail("Email already in use");
        });
    } else {
      signInWithEmailAndPassword(auth, em.current.value, pas.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        //  console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.messages;
          em.current.value = null;
          setmail("INVALID_LOGIN_CREDENTIALS");
        });
    }
  };
  return (
    <div className="relative w-full h-screen bg-black">
      <Heading className="relative z-10" />
      <img
        src={BG_IMGAGE}
        alt="bg-image"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0"
      />
      <div className="absolute z-10 top-[13%] left-[15%] flex flex-col w-[70%] h-5/6 mt-0.5  bg-black bg-opacity-80 items-center justify-center sm:w-[55%] sm:h-[70%] sm:left-[25%] sm:top-[20%] md:h-[80%] md:w-[400px] md:left-[35%]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col  h-5/6 w-10/12 pl-5 justify-evenly "
        >
          <h1 className="text-white text-5xl font-semibold">
            {!Sign ? "Sign In" : "Sign Up"}
          </h1>
          {Sign && (
            <input
              ref={nam}
              className="bg-gray-900 w-[98%] h-12 border-2 rounded-lg text-white pl-2"
              placeholder="Username"
              type="text"
            />
          )}
          <input
            ref={em}
            className={
              mail !== "Email or mobile number"
                ? "bg-gray-900 w-[98%] h-12 border-2 rounded-lg text-white pl-2 placeholder-opacity-30 font-medium placeholder-red-400 "
                : "bg-gray-900 w-[98%] h-12 border-2 rounded-lg text-white pl-2"
            }
            placeholder={mail}
            type="text"
          />
          <input
            ref={pas}
            className={
              spas !== "Password"
                ? "bg-gray-900 w-[98%] h-12 border-2 rounded-lg text-white pl-2 placeholder-opacity-30 font-medium placeholder-red-400 "
                : "bg-gray-900 w-[98%] h-12 border-2 rounded-lg text-white pl-2"
            }
            placeholder={spas}
            type="password"
          />
          <button
            className="text-white h-9  w-[98%] bg-red-700 rounded-md font-bold text-lg"
            onClick={submithandle}
          >
            {!Sign ? "Sign In" : "Sign Up"}
          </button>
          {!Sign && (
            <div className="flex flex-col">
              <span className="text-white w-[98%] text-center pb-1">
              OR
            </span>
              <button className="text-white w-[98%] h-9 bg-slate-100 bg-opacity-10 rounded-md font-bold text-lg">
                Use a sign-in code
              </button>
              <button className="text-white ml-28 mt-2 hover:underline hover:text-gray-400 text-base cursor-pointer">
                Forgot password?
              </button>
            </div>
          )}
          <div className="w-[98%]">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-white font-semibold pb-1 h-10">
              {" "}
              Remember me
            </span>
            {!Sign ? (
              <div className="text-white text-base">
                {" "}
                <span>New to Netflix? </span>{" "}
                <span
                  className="font-bold hover:underline cursor-pointer"
                  onClick={() => {
                    setSign(true);
                  }}
                >
                  Sign up.
                </span>
              </div>
            ) : (
              <div className="text-white text-base">
                {" "}
                <span>already have account? </span>{" "}
                <span
                  className="font-bold hover:underline cursor-pointer"
                  onClick={() => {
                    setSign(false);
                  }}
                >
                  Sign in now.
                </span>
              </div>
            )}
            <div className="text-white text-base font-semibold">
              <span className="text-xs text-gray-400">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </span>
              <span className="text-xs text-blue-700 hover:underline cursor-pointer">
                {" "}
                Learn more.
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
