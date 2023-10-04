import { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/Rectangle1.png";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import pic1 from "../../assets/images/Sajek.png";
import pic2 from "../../assets/images/Sreemongol.png";
import pic3 from "../../assets/images/sundorbon.png";
const Home = () => {
  const [fulldata, setFullData] = useState([]);
  const [showData, setShowData] = useState(1);
  const [showPic, setShowPic] = useState(backgroundImage);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFullData(data));
  }, []);

  const showFilterData = fulldata.find((item) => item.id === showData);

  const handleImageChange = (imageSrc) => {
    setShowPic(imageSrc);
  };

  return (
    <div>
      <div
        className="hero w-full h-screen top-0 left-0 bg-black opacity-120 relative"
        style={{
          backgroundImage: `url(${showPic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
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
        <div className="grid grid-cols-3 ">
          <div>
            <div className="w-[550px]  ml-[50px]">
              <h1 className="text-white text-7xl font-bold ml-2 mb-2">
                {showFilterData?.title}
              </h1>
              <p className="text-white text-xl ml-2 mb-2">
                {showFilterData?.description}
              </p>
              <button className="btn border-none bg-[#F9A51A]">Booking</button>
            </div>
          </div>
        </div>
        <div className="cols-span-2  ml-[600px]">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div
              onClick={() => {
                setShowData(4), handleImageChange(pic1);
              }}
              className="carousel-item flex flex-col cursor-pointer"
            >
              <img src={pic1} className="rounded-box h-96" />
              <h1 className="text-white text-2xl text-center font-bold">
                Sajek
              </h1>
            </div>
            <div
              onClick={() => {
                setShowData(3), handleImageChange(pic2);
              }}
              className="carousel-item  flex flex-col cursor-pointer"
            >
              <img src={pic2} className="rounded-box  h-96" />
              <h1 className="text-white text-2xl text-center font-bold">
                Sremongol
              </h1>
            </div>
            <div
              onClick={() => {
                setShowData(2), handleImageChange(pic3);
              }}
              className="carousel-item  flex flex-col cursor-pointer"
            >
              <img src={pic3} className="rounded-box  h-96" />
              <h1 className="text-white text-2xl text-center font-bold">
                Sundorbon
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
