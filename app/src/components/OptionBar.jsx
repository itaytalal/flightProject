import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function OptionBar() {
    const navigate = useNavigate();
    const showFlightsButton=()=>{ navigate("/controlPanel")}
    const sortFlightsButton=()=>{navigate("/controlPanel/Sort")}
    const addFlightButton=()=>{navigate("/controlPanel/add")}
    const deleteFlightButton=()=>{ navigate("/controlPanel/delete")}
  return (
    <div className="Bar-Container">
      <button onClick={()=>showFlightsButton()}>Show Flights</button>
      <button onClick={()=>sortFlightsButton()}>Sort Flights</button>
      <button onClick={()=>addFlightButton()}>Add Flight</button>
      <button onClick={()=>deleteFlightButton()}>Delete Flight</button>
    </div>
  );
}
