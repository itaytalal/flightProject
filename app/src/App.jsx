import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import ControlPanel from "./components/Pages/ControlPanel";
import SortPage from "./components/Pages/SortPage";
import AddFlightPage from "./components/Pages/AddFlightPage";
import DeletePage from "./components/Pages/DeletePage";

function App() {
  const [flights, setFlights] = useState();
  const [filteredFlights, setFilteredFlights] = useState();
  useEffect(() => {
    const flightA = { id: 10001, company: "ElAl", passengers: 350 };
    const flightB = { id: 10002, company: "IsraAir", passengers: 150 };
    const flightC = { id: 10003, company: "ElTalala", passengers: 200 };
    const flightD = { id: 10004, company: "ItayAir", passengers: 500 };
    const initialFlights = [flightA, flightB, flightC, flightD];
    setFlights(initialFlights);
    setFilteredFlights(initialFlights);
  }, []);
  const sortHigh = () => {
    setFilteredFlights(
      [...flights].sort((a, b) => b.passengers - a.passengers)
    );
  };
  const sortLow = () => {
    setFilteredFlights(
      [...flights].sort((a, b) => a.passengers - b.passengers)
    );
  };
  const showByCompany = (companyName) => {
    const res = flights.filter((flight) =>
      flight.company.toLowerCase().includes(companyName.toLowerCase())
    );
    setFilteredFlights(res);
  };
  const checkUnique = (id) => {
    return flights.some((flight) => flight.id == id);
  };
  const navigate = useNavigate();
  const addnewFlight = (f1) => {
    if (f1.id.length != 5) {
      alert("id must be in the length of 5");
      return;
    }
    if (checkUnique(f1.id)) {
      console.log(f1);
      alert("id is not unique");
      return;
    }
    if (!f1.company) {
      alert("no company inputed");
      return;
    }
    if (f1.passengers < 1 || f1.passengers > 450) {
      alert("passengers must be between 1-450");
      return;
    }
    const newflights = [...flights, f1];
    setFlights(newflights);
    setFilteredFlights(newflights);
    navigate("/controlPanel");
  };
  const deleteByID = (id) => {
    const filter = flights.filter((f) => f.id != id);
    setFlights(filter);
    setFilteredFlights(filter);
    navigate("/controlPanel");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/controlPanel"
          element={<ControlPanel flights={flights} />}
        />
        <Route
          path="/controlPanel/Sort"
          element={
            <SortPage
              flights={filteredFlights}
              sortHigh={sortHigh}
              sortLow={sortLow}
              showByCompany={showByCompany}
            />
          }
        />
        <Route
          path="/controlPanel/Add"
          element={
            <AddFlightPage flights={flights} addnewFlight={addnewFlight} />
          }
        />
        <Route
          path="/controlPanel/Delete"
          element={<DeletePage flights={flights} deleteByID={deleteByID} />}
        />
      </Routes>
    </div>
  );
}

export default App;
