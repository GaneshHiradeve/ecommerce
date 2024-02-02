import React, { useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UpdateProfilePicture, changePassword } from "../redux/action/user.js";



const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [imagePrev, setImagePrev] = useState('');
  const [profilepicture, setProfilePicture] = useState('');
  const dispatch = useDispatch();

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setProfilePicture(file);
    };
  };
  // console.log(profilepicture)
  const UpdateProfile=(e)=>{
      e.preventDefault()

       
       dispatch(UpdateProfilePicture(imagePrev))
  }
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
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <h2>Kevin Anderson</h2>
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
                      data-bs-target="#profile-edit"
                    >
                      Edit Profile
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
                      <div className="col-lg-9 col-md-8">{user && user.name}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Country</div>
                      <div className="col-lg-9 col-md-8">USA</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">{user && user.email}</div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade profile-edit pt-3"
                    id="profile-edit"
                  >
                    <form onSubmit={UpdateProfile}>
                      <div className="row mb-3">
                        <label
                          for="profileImage"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Profile Image
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <img src={imagePrev ? imagePrev :"assets/img/profile-img.jpg"} alt="Profile" />
                          <div className="pt-2 profileicon">
                            <input
                              type="file"
                              id="profilepicture"
                              name="profilepicture"
                              onChange={changeImageHandler}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="fullName"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Full Name
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="fullName"
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Enter Full Name"
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="Country"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Country
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="country"
                            type="text"
                            className="form-control"
                            id="Country"
                            placeholder="Enter Country Name"
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
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
