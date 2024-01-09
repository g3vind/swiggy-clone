import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function SignIn() {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };
  return (
    <section className="mb-80">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-left text-3xl font-bold leading-tight text-black">
            Login
          </h2>
          <p className="mt-2 text-left text-sm text-gray-600 ">
            or &nbsp;
            <span className="font-semibold text-orange-400 transition-all duration-200 hover:underline">
              Create an account
            </span>
          </p>
          <div className="-mt-24 flex justify-end">
            <img
              className="h-28 w-28"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            />
          </div>
          <form className="mt-8">
            <div className="space-y-5">
              <div>
                <div className="mt-2">
                  <input
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                    className="flex h-14 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="NAME"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={handleLogin}
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-3 font-semibold leading-7 text-white hover:bg-orange/80"
                >
                  LOGIN
                </button>

                <small className="text-gray-400 text-xs mt-3">
                  By clicking on Login, I accept the &nbsp;
                  <span className="text-black">
                    Terms & Conditions & Privacy Policy
                  </span>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
