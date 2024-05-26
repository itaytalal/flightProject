import React, { useState } from "react";

export default function FlightDeleter({deleteByID}) {
  const [id, setId] = useState(0);
  return (
    <div className="form-container">
        <h4>Delete Flight By ID</h4>
      <input
        type="number"
        placeholder="enter ID for delete"
        onInput={(e) => setId(e.target.value)}
      />
      <br /><br/>
      <button onClick={()=>deleteByID(id)}>Delete</button>
    </div>
  );
}
