import React, { useEffect, useState } from "react";

const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://mercedez-warehouse.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return [tools,setTools];
};

export default useTools;
