import React from "react";
import OptionBar from "../OptionBar";
import ShowFlights from "../ShowFlights";
import FlightAdder from "../FlightAdder";

export default function AddFlightPage({ flights,addnewFlight }) {
  return (
    <div className="flex">
      <div>
        <OptionBar /><br/>
        <FlightAdder addnewFlight={addnewFlight}/>
      </div>
      <div>
        <ShowFlights flights={flights} />
      </div>
    </div>
  );
}
