import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { _id } = useParams();

  const [tool, setTool] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/tool/${_id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);
  console.log(tool)
    return (
        <div>
            <h1>purchase</h1>
        </div>
    );
};

export default Purchase;