import { Link, useNavigate } from "react-router-dom";

function Welcome() {
  const nav = useNavigate();
  return (
    <div className="h-screen pt-32  items-center flex flex-col   transition ease-in-out duration-300 bg-[url(/hero-wallpaper.jpg)] bg-cover text-gray-300 gap-6 ">
      <h3 className="text-5xl font-bold font-serif mt-16">Hello there!</h3>
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
