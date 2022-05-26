import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Users = () => {
  const { data, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const makeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  const removeUser = (email) => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {data.map((user, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  {user.role !== "admin" ? (
                    <button
                      class="btn btn-xs"
                      onClick={() => makeAdmin(user.email, refetch)}
                    >
                      Make Admin
                    </button>
                  ) : (
                    "Admin"
                  )}
                </td>
                <td className="text-center">
                  {user.role !== "admin" && (
                    <button
                      class="btn btn-xs"
                      onClick={() => removeUser(user.email)}
                    >
                      Remove User
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
