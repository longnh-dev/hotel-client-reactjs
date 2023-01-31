  import React from "react";
  import { NavLink, useNavigate } from "react-router-dom";
  import { FaAlignRight } from "react-icons/fa";
  import { useUserAuth } from "../contexts/UserAuthContext";
import { useState, useEffect } from "react";

  const Navbar = () => {
    const {logOut} = useUserAuth();
    const navigate = useNavigate();
    var token = localStorage.getItem("tokenString");

    var userModel = localStorage.getItem("userModel");
    const userOb = JSON.parse(userModel);
    

    // console.log(user);

    useEffect(() => {
      if(userModel !== undefined){
        // setShow(false); 
        console.log(userModel);
      }
    }, []);
  
    async function handleLogout() {
      try {
        await logOut();
        localStorage.clear();
        navigate("/signin");
      } catch {
        console.log("can't logut");
      }
    }
    return (
      <>

        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent py-2 fixed-top scrolled">
          <div className="container-fluid ">
            <span
              className="navbar-brand font-weight-bolder"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Hotel.
            </span>
            <a
              href="void(0)"
              className="navbar-toggler border-0"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <FaAlignRight className="nav-icon" />
              </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    exact="true"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    exact="true"
                    to="/rooms"
                  >
                    Rooms
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                  //   activeClassName="active_class"
                    exact="true"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                  //   activeClassName="active_class"
                    exact="true"
                    to="/contact-us"
                  >
                    Contact
                  </NavLink>
                </li>

                {userModel ? (
                  <>
                    <li>
                      <NavLink
                        className="nav-link"
                        exact="true"
                        to="/signup"
                      >
                        
                      </NavLink>

                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={userOb.avatarUrl} width="40" height="40" class="rounded-circle" />
                      </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="profile">Edit Profile</a>
                      <a class="dropdown-item" href="changePassword">Update your password</a>
                      <a class="dropdown-item" href="history">Booking history</a>

                      <a class="dropdown-item"
                          onClick={handleLogout}>Log Out</a>
                    </div>
                </li>
                  </>
                ) : 
                (
                  <>
                    <li>
                      <NavLink
                        className="nav-link"
                        exact="true"
                        to="/signin"
                      >
                        <button type="button" className="btn btn-outline-success">
                          Sign in
                        </button> 
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="nav-link"
                        exact="true"
                        to="/signup"
                      >
                        <button type="button" className="btn btn-outline-danger">
                          Sign up
                        </button>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };
  export default Navbar;
