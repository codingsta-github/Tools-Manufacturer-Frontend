import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Shared/Button";
const NotFound = () => {
  const navigate = useNavigate();
  const onNotFound = () => {
    navigate("/");
  };
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <p className="text-xl pb-5 text-danger">404-page not found</p>
      <p className="text-sm pb-3">
        The page you are looking for might have been removed <br /> had it's
        name changed or is temporarily unavailable
      </p>
      <Button onclick={onNotFound}>Go to homepage</Button>
    </div>
  );
};

export default NotFound;
