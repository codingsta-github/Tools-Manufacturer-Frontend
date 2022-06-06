import React, { useEffect, useState } from "react";
import useTools from "../../Hooks/useTools";
import Tool from "./Tool";


const Tools = () => {
  const [tools]=useTools()
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1">
      {
          tools.map(tool=><Tool tool={tool} key={tool._id}></Tool>)
      }
    </div>
  );
};

export default Tools;
