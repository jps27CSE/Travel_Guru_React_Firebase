import React from "react";
import backgroundImage from "../../assets/images/Rectangle1.png";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        className="hero w-full h-screen top-0 left-0 bg-black opacity-120 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="hero-overlay bg-opacity-70"></div>
        <div className="">
          <nav className="absolute top-0 left-12 p-4">
            <img className="h-[50px]" src={Logo} alt="Navbar Logo" />
          </nav>
          <input
            className="input absolute top-0 mt-4 left-52 "
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              border: "1px solid #fff",
              color: "#fff",
            }}
          />
          <NavLink to="/news">
            <li className="absolute top-0 mt-7 left-[550px] text-white list-none font-bold">
              News
            </li>
          </NavLink>
          <button className="absolute top-0 mt-5 left-[500px] md:left-[900px] lg:left-[1100px]   btn bg-[#F9A51A] border-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
