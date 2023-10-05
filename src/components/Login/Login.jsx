import { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 500,
    });
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email, password)
      .then((user) => {
        console.log(user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="mt-5">
        <div data-aos="zoom-in" className=" min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleLoginSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn ">Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
