import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // const currentUser = {
        //   email: user.email,
        // };

        form.reset();
        toast.success("Welcome!! Login Successfull");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });

    setError("");
  };

  //login with google
  const handleGoogleLogIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // const currentUser = {
        //   email: user.email,
        // };
        toast.success("Welcome!! Login Successfull.");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
    setError("");
  };

  return (
    <div className="pt-20 fixed w-full mb-20 ">
      <div className="py-10 px-5 lg:pb-16">
        <div className="w-full max-w-2xl p-8 rounded-xl bg-teal-300 text-black mx-auto">
          <h1 className="text-2xl text-center">Login Now</h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-black text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black  focus:border-violet-400 font-normal text-[16px]"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-black text-lg">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full px-4 py-4 rounded-md border-white bg-slate-100 text-black focus:border-violet-400 font-normal text-[16px]"
                required
              />
            </div>

            <p className="text-red-700">{error}</p>
            <button className="block w-full px-6 py-2 text-lg font-normal border border-black rounded text-black hover:bg-teal-500 hover:border-teal-500 dark:border-gray-100  dark:text-gray-100">
              Login
            </button>
          </form>

          <p className="px-3 pt-10 pb-5 text-center font-normal text-lg dark:text-gray-400">
            Login with Social Accounts
          </p>

          <button
            onClick={handleGoogleLogIn}
            className="flex items-center justify-center w-full px-6 py-2 text-[16px] font-normal border  border-black rounded text-black hover:bg-blue-800 hover:border-teal-500 hover:text-white mb-5"
          >
            <FaGoogle className="mr-3" /> Login with Google
          </button>

          <p className="text-sm text-center sm:px-6 pt-5 text-gray-800">
            Dont't have an account?
            <span className="ml-2 text-teal-900 hover:underline">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
