import React from 'react';
import useTools from '../../Hooks/useTools';

const ManageTools = () => {
    const [tools,setTools]=useTools()
    const Delete=(id)=>{
        fetch(`https://shielded-dusk-13129.herokuapp.com/tool/${id}`, {
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data=>{
            const remaining = tools.filter(tool => tool._id !== id)
            setTools(remaining);
          })
    }
    return (
        
            <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Tool</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {tools.map((tool) => (
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={tool.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{tool.name}</td>
                <td>{tool.minimum}</td>
                <td>{tool.available}</td>
                <td>{tool.price}</td>
                <td><button onClick={()=>Delete(tool._id)} className="btn btn-xs">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    );
};

export default ManageTools;