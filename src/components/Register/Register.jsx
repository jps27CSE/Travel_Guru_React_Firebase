import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirm_password = form.get("confirm_password");
    console.log(typeof password);
    if (password !== confirm_password) {
      return alert("Password Not Matched");
    }

    createUser(email, password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="confirm_password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn ">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
