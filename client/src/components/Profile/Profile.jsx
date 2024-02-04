import React, { useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePassword } from "../redux/action/user.js";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const dispatch = useDispatch();


  const Toastmessage = (message) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const ChangePassword = (e) => {
    e.preventDefault();

    if (password === newpassword && confirmpassword === newpassword) {
      Toastmessage("Password Already Used");
    } else if (confirmpassword === newpassword) {
      const str = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (str.test(newpassword)) {
        dispatch(changePassword(newpassword));
      } else {
        Toastmessage("Use a strong password for security");
      }
    } else {
      Toastmessage("The passwords don't match");
    }
  };
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Profile</h1>
        <div></div>
      </div>

      <section className="section profile">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img
                  src="https://i.pinimg.com/736x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <h2>{user.name}</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Profile
                    </button>
                  </li>

                 

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>

                <div className="tab-content pt-2">
                  <div
                    className="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <div className="row mt-2">
                      <div className="col-lg-3 col-md-4 label ">Full Name</div>
                      <div className="col-lg-9 col-md-8">
                        {user && user.name}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Country</div>
                      <div className="col-lg-9 col-md-8">India</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Role</div>
                      <div className="col-lg-9 col-md-8">{user.role}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">
                        {user && user.email}
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade pt-3"
                    id="profile-change-password"
                  >
                    <form>
                      <div className="row mb-3">
                        <label
                          for="currentPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Current Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="currentPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="newPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          New Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="newpassword"
                            type="password"
                            className="form-control"
                            id="newPassword"
                            value={newpassword}
                            onChange={(e) => setNewpassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="renewPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Re-enter New Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="renewpassword"
                            type="password"
                            className="form-control"
                            id="renewPassword"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          onClick={ChangePassword}
                          className="btn btn-primary"
                        >
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </main>
  );
};

export default Profile;
