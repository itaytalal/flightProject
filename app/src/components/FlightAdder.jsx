import React from "react";
import {  useState } from "react";


export default function FlightAdder({addnewFlight}) {
    const [newFlight, setNewFlight] = useState({ id: "", company: "", passengers: "" });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFlight({ ...newFlight, [name]: value });
      };
    const addFlight =(e)=>{
        e.preventDefault();
        addnewFlight(newFlight)
    }

  return (
    <form className="form-container" onSubmit={addFlight}>
        <div>
            <h4>Add New Flight</h4>
          <label htmlFor="id">Flight ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={newFlight.id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={newFlight.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={newFlight.passengers}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Flight</button>
      </form>
  );
}
