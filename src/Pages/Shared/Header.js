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
    localStorage.removeItem('accessToken')
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
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/myPortfolio">My Portfolio</Link>
      </li>
      <li>
        {
          user && <Link to="/dashboard">Dashboard</Link>
        }
      </li>
    </>
  );
  
  return (
    <div className="navbar bg-base-100 justify-between uppercase  font-bold py-3 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden sm:p-0">
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
        <Link to="/" className="btn btn-ghost normal-case 2xl:text-4xl xl:text-2xl lg:text-lg md:text-md font-bold">
          HiKOKI Holdings Co.
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        
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
  );
};

export default Header;
