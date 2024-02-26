import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthProvider";
import { RxAvatar } from "react-icons/rx";
import { Problems } from "../../Problems/index";
import { BsList } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
function Header({ problempage }) {
  const data = useLocation().pathname.split("/");
  let index = data[data.length - 2];
  const nav = useNavigate();
  function handlechanegleft() {
    if (index == 0) {
      index = Problems.length;
    }
    index = index - 1;
    nav(`/problems/${index}/${Problems[index].name.id}`);
  }
  function handlechanegright() {
    if (index == 4) {
      index = -1;
    }
    ++index;
    nav(`/problems/${index}/${Problems[index].name.id}`);
  }
  const [user] = useAuthState(auth);
  const authCtx = useAuth();
  const handleLogout = async () => {
    try {
      await authCtx.logout(); // Call the logout function
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="h-[3rem] shadow-md flex justify-center">
      <div className="w-[1200px] px-4  flex items-center justify-between">
        <div className="text-left ">
          <Link to="/">
            <div className="h-full">
              <img
                src="https://imgs.search.brave.com/n4F8ExAGY_kzINgXKS-61UqT5-BZuFWlPse_LGolyP4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBhL0xlZXRDb2Rl/X0xvZ29fYmxhY2tf/d2l0aF90ZXh0LnN2/Zw.svg"
                alt=""
                className="h-[2rem] text-white"
              />
            </div>
          </Link>
        </div>
        {problempage && (
          <div className="flex items-center gap-2 flex-1 justify-center">
            <div
              className="flex items-center justify-center rounded bg-gray-700 text-white h-8 w-8 cursor-pointer"
              onClick={handlechanegleft}
            >
              <FaChevronLeft />
            </div>
            <Link
              to={"/ProblemSet"}
              className="flex items-center gap-2 font-medium max-w-[170px] cursor-pointer"
            >
              <div>
                <BsList />
              </div>
              <p>ProblemList</p>
            </Link>
            <div
              className="flex items-center justify-center  bg-gray-700 text-white rounded h-8 w-8 cursor-pointer"
              onClick={handlechanegright}
            >
              <FaChevronRight />
            </div>
          </div>
        )}
        <div>
          <div>
            {!user && (
              <Link to={"/LogIn"}>
                <button className="bg-blue-800 text-white p-1.5 px-3 rounded font-semibold text-sm hover:bg-white border-blue-800 hover:text-blue-800 transition ease-in-out duration-300">
                  Sign In
                </button>
              </Link>
            )}
            {user && (
              <p className="flex items-center gap-4">
                <RxAvatar size={28} />
                <IoIosLogOut
                  size={28}
                  className="hover:text-blue-600 cursor-pointer"
                  onClick={() => {
                    handleLogout();
                  }}
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
