import { Link, useNavigate } from "react-router-dom";

function Welcome() {
  const nav = useNavigate();
  return (
    <div className="h-screen justify-center items-center flex flex-col gap-6 transition ease-in-out duration-300 bg-gradient-to-t from-black to-gray-50">
      <h3 className="text-7xl font-bold font-serif">Welcome to Leetcode</h3>
      <div className="flex justify-start">
        <Link to={"/ProblemSet"}>
          <button className="btn btn-primary hover:btn-secondary text-white hover:text-black">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
