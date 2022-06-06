import React, { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const email = user?.email;
    fetch(`https://mercedez-warehouse.herokuapp.com/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user]);
  return [admin];
};
export default useAdmin;
