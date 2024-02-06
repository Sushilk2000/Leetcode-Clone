import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthProvider";

function LogIn() {
  const authCtx = useAuth();
  const emailRef = useRef();
  const nav = useNavigate();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await authCtx.login(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("Login successful!");

      // Redirect to a specific route after successful login
      nav("/problemSet"); // Change "/dashboard" to the desired route
    } catch (error) {
      setError("Failed to log in. Check your email and password.");
      console.error("Login error:", error);
    }
  }

  return (
    <div className="h-[calc(100vh-3rem)]  flex justify-center items-center">
      <div className="border border-black bg-gray-700 px-3 hover:scale-[1.1] transition ease-in-out duration-500 rounded-xl py-6">
        <div className="flex justify-end">
          <p>
            <Link to={"/"}>
              <IoClose className="text-white scale-[1.2] hover:bg-blue-50 rounded-sm hover:text-black" />
            </Link>
          </p>
        </div>
        <form className="flex flex-col gap-10 w-64" onSubmit={handleSubmit}>
          <h3 className="text-white font-bold text-2xl text-center">
            Sign In to Leetcode
          </h3>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xl font-medium text-gray-100"
            >
              Your Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              className="border border-white h-8 rounded-md px-2 py-2 hover:bg-black text-black hover:text-white placeholder:text-gray-500 placeholder:font-semibold"
              placeholder="example@email.com"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-xl font-medium text-gray-100"
            >
              Your Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
              className="border border-white h-8 rounded-md px-2 py-2 hover:bg-black text-black hover:text-white placeholder:text-gray-500 placeholder:font-semibold"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-1.5 bg-yellow-500 font-semibold hover:bg-blue-500 hover:text-white transition ease-in-out duration-300 rounded-lg"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-end mt-2 text-white">
          <Link to={"/SignUp"}>
            <p className="hover:link font-medium text-sm">Yet to register?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
