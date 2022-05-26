import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Users = () => {
  const { data,isLoading } = useQuery("users", () => fetch("http://localhost:5000/users").then((res) => res.json()));
  if (isLoading) {
      return <Loading></Loading>
  }
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
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      {
          data.map((user,i)=><tr>
              <td>{i+1}</td>
              <td>{user._id}</td>
              <td>{user.email}</td>
          </tr>)
      }
  
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;
