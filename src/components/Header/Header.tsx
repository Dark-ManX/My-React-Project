import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../imgs/logo.png";

const Header: FC = () => {
  return (
    <header
      className={`absolute top-[0] left-[0] w-[100%] bg-[rgba(100,107,117,0.6)] justify-between text-white text-[25px] align-[center] font-['Kanit Bold'] z-10`}
    >
      <div className={"container" + " " + "flex items-center max-w-[100%]"}>
        <Link
          to="/"
          className={"w-[38px] h-[38px] rounded-[50%] overflow-hidden"}
        >
          <img src={logo} alt="logo" width={38} height={38} />
        </Link>
        <nav className={"ml-[50px]"}>
          <ul className={"flex py-[15px]"}>
            <li className={"mr-[50px]"}>
              <NavLink
                to="/history"
                className={
                  "hover:bg-gradient-to-r hover:from-[#03adfc] hover:via-[#031cfc] hover:to-[#fc030b] hover:text-transparent hover:bg-clip-text transition-colors duration-200"
                }
              >
                History
              </NavLink>
            </li>
            <li className={"mr-[50px]"}>
              <NavLink
                to="/gallery"
                className={
                  "hover:bg-gradient-to-r hover:from-[#03adfc] hover:via-[#031cfc] hover:to-[#fc030b] hover:text-transparent hover:bg-clip-text transition-colors duration-200"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={
                  "hover:bg-gradient-to-r hover:from-[#03adfc] hover:via-[#031cfc] hover:to-[#fc030b] hover:text-transparent hover:bg-clip-text transition-colors duration-200"
                }
              >
                Any
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={
            "ml-[auto] hover:bg-gradient-to-r hover:from-[#03adfc] hover:via-[#031cfc] hover:to-[#fc030b] hover:text-transparent hover:bg-clip-text transition-colors duration-200"
          }
        >
          Sign Up
        </button>
        <button
          className={
            "ml-10 hover:bg-gradient-to-r hover:from-[#03adfc] hover:via-[#031cfc] hover:to-[#fc030b] hover:text-transparent hover:bg-clip-text transition-colors duration-200"
          }
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
