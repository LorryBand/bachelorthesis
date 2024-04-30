import InputField from "components/fields/InputField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchAuth, fetchRegister } from "../../redux/slices/auth";
import { selectIsAuth } from "../../redux/slices/auth";

export default function SignIn() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const [sign, setSign] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameUp, setNameUp] = useState("");
  const [emailUp, setEmailUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");

  const login = async () => {
    let loginObject = {
      "email": email,
      "password": password
    }

    const data = await dispatch(fetchAuth(loginObject));

    if (!data.payload) {
      return alert("Не удалось авторизоваться!");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  }

  const register = async () => {
    let loginObject = {
      "email": emailUp,
      "password": passwordUp,
      "fullName": nameUp
    }

    const data = await dispatch(fetchRegister(loginObject));

    if (!data.payload) {
      return alert("Не удалось авторизоваться!");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  }

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      {sign ? (
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign In
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            onChangeInput={setEmail}
          />
          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            onChangeInput={setPassword}
          />
          <button
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => login()}
          >
            Sign In
          </button>
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Not registered yet?
            </span>
            <button
              onClick={() => setSign(false)}
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Create an account
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            Sign Up
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Enter your email and password to sign in!
          </p>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Full name*"
            placeholder="Ivan Ivanov"
            id="name"
            type="text"
            onChangeInput={setNameUp}
          />
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            onChangeInput={setEmailUp}
          />
          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            onChangeInput={setPasswordUp}
          />
          <button
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => register()}
          >
            Sign Up
          </button>
          <div className="mt-4">
            <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
              Have account
            </span>
            <button
              onClick={() => setSign(true)}
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
