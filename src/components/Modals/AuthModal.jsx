import { IoClose } from "react-icons/io5";
import LogIn from "./LogIn";
function AuthModal() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-yellow-50 bg-opacity-60 "></div>
      <div className="w-full sm:w-[450px] top-0 left-[20%] absolute translate-x-1/2 translate-y-1/2 flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-orange-500 to-slate-900 mx-6">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>
            <LogIn></LogIn>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthModal;
