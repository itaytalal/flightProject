import React from "react";

export default function Sorters({sortHigh,sortLow,showByCompany}) {
    const handleSelect = (val)=>{
        if (val === "highToLow") sortHigh()
            else if (val === "lowToHigh") sortLow()
    }

  return (
    <div>
      <input
        placeholder="Search by Company"
        type="text"
        onChange={(e)=>showByCompany(e.target.value)}
      /><br/>
      <select onChange={(e)=>handleSelect(e.target.value)}>
        <option value="highToLow">Highest to Lowest</option>
        <option value="lowToHigh">Lowest to Highest</option>
      </select>
    </div>
  );
}
