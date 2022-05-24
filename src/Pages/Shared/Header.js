import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import profile from '../../Assets/Profile/profile.jpg'
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
const Header = () => {
  const logout = () => {
    signOut(auth);
  };
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>
  }
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/purchase">Purchase</Link>
      </li>
      <li>
        <Link to="/testimonial">Reviews</Link>
      </li>
      <li>
        {
          user && <Link to="/dashboard">Dashboard</Link>
        }
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );
  
  return (
    <div className="navbar bg-base-100 justify-between uppercase  font-bold py-3 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case 2xl:text-5xl xl:text-2xl lg:text-xl md:text-lg font-bold">
          Koki Holdings Co.
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        <div class="flex-none ">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabindex="0"
              class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div class="card-body">
                <span class="font-bold text-lg">8 Items</span>
                <span class="text-info">Subtotal: $999</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
          {user?<div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src={user.photoURL? user.photoURL : profile} alt=""/>
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                
                <a class="justify-between">
                {user.displayName?user.displayName:'update your profile'}
                  <span class="badge">New</span>
                </a>
              </li>
              
              <li>
                <button onClick={logout}>Logout</button>

              </li>
            </ul>

          </div>:<Link className="text-xl" to="/login"><FontAwesomeIcon icon={faUser} /></Link>}
        </div>
      </div>
    </div>
  );
};

export default Header;
