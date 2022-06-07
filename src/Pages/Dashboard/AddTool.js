import React from "react";

const AddTool = () => {
  const newTool = { name: "jack" };
  const addTool = (e) => {
    e.preventDefault();

    // fetch("https://shielded-dusk-13129.herokuapp.com/tool", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newTool),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     alert("Item added!");
    //   });
  };
  return (
    <div>
      <form action="" onSubmit={addTool}>
        <input type="image"  alt=""/>
        <input type="submit" value="click" />
      </form>
    </div>
  );
};

export default AddTool;
