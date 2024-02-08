import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
function SignUp() {
  const authCtx = useAuth();
  const emailRef = useRef();
  const passRef = useRef();
  const confrimPassRef = useRef();
  const [error, setError] = useState("");
  const [laoding, setLoding] = useState(false);
  const nav = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    if (passRef.current.value !== confrimPassRef.current.value) {
      setError("Password and Confirm Password do not Match");
    }
    try {
      const response = await authCtx.signUp(
        emailRef.current.value,
        passRef.current.value
      );
      console.log(response);
      alert("You have successfully registered");
      nav("/login");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="h-[calc(100vh-3rem)] flex justify-center items-center">
      <div className="border border-black bg-gray-700 w-[350px] px-3 hover:scale-[1.03] transition ease-in-out duration-500 rounded-xl py-6">
        <div className="flex w-full justify-end">
          <p>
            <Link to={"/"}>
              <IoClose className="text-white scale-[1.2] hover:bg-blue-50 rounded-sm hover:text-black" />
            </Link>
          </p>
        </div>
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <h3 className="text-white font-bold text-2xl text-center">
            Sign Up to Leetcode
          </h3>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xl font-medium text-gray-100"
            >
              Your Email:
            </label>
            <input
              onChange={handleemailchange}
              type="email"
              name="email"
              id="email"
              required
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
              required
              id="password"
              ref={passRef}
              className="border border-white h-8 rounded-md px-2 py-2 hover:bg-black text-black hover:text-white placeholder:text-gray-500 placeholder:font-semibold"
              placeholder="********"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="text-xl font-medium text-gray-100"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              id="confirmPassword"
              ref={confrimPassRef}
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
          <Link to={"/LogIn"}>
            <p className="hover:link font-medium text-sm">
              Already have an account?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
