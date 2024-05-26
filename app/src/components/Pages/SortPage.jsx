import React from "react";
import OptionBar from "../OptionBar";
import ShowFlights from "../ShowFlights";
import Sorters from "../Sorters";

export default function SortPage({
  flights,
  sortHigh,
  sortLow,
  showByCompany,
}) {
  return (
    <div className="flex">
      <div>
        <OptionBar /><br/>
        <Sorters sortHigh={sortHigh} sortLow={sortLow} showByCompany={showByCompany}/>
      </div>
      <div>
        <ShowFlights flights={flights} />
      </div>
    </div>
  );
}
