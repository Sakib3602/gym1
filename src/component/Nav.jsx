import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar   h-[120px] border-b border-gray-800 border-solid text-white">
        <div className="navbar-start">
          <div className="dropdown bg-black">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lg:h-9 lg:w-9 md:h-9 md:w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
             
              <li>
                <a>About</a>
              </li>
              <li>
                <Link to={'/elem'}>Elements</Link>
              </li>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
              <li>
                <Link to={'/registration'}>Registration</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl md:text-3xl lg:text-3xl">
            FIT FOR YOU
          </a>
        </div>
        <div className="navbar-end space-x-1 lg:space-x-4 md:space-x-4">
        
          <Link to={"/login"}>
            {" "}
            <a
              href="#_"
              className="hidden lg:block md:block px-5 py-2.5 relative rounded group  text-white font-medium "
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="relative">Log in</span>
            </a>
          </Link>
          <Link to={"/registration"}>
            {" "}
            <a
              href="#_"
              className="hidden lg:block md:block px-5 py-2.5 relative rounded group  text-white font-medium "
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="relative">Registration</span>
            </a>
          </Link>
          <a
              href="#_"
              className="px-5 py-1.5 text-[14px] lg:text-[20px] relative rounded group  text-white font-medium inline-block"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="relative">Log Out</span>
            </a>
          

        </div>
      </div>
    </div>
  );
};

export default Nav;
