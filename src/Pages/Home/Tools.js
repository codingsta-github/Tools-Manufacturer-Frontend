import React, { useEffect, useState } from "react";
import Tool from "./Tool";


const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/tools")
    .then((res) => res.json())
    .then((data) => setTools(data));
  },[])
console.log(tools)
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-3 gap-5">
      {
          tools.map(tool=><Tool tool={tool} key={tool._id}></Tool>)
      }
    </div>
  );
};

export default Tools;
