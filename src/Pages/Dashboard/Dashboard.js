import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/manageOrder">Manage Order</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/manageTools">Manage Tools</Link>
            </li>
          )}

          {admin && (
            <li>
              <Link to="/dashboard/users">All users</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/addTool">Add Tools</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="/dashboard/myOrder">My Order</Link>
            </li>
          )}
          {!admin && (
            <li>
              <Link to="/dashboard/myReview">My Review</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
