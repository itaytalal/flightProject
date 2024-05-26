import React from 'react'
import "./showFlights.css"

export default function ShowFlights({flights}) {
    if (!flights) return <div>no flights</div>
  return (
    <div className="flex-container">
    {flights.map((flight) => (
      <div key={flight.id} className="flex-item">
        <h3>Flight ID: {flight.id}</h3>
        <p>Company: {flight.company}</p>
        <p>Passengers: {flight.passengers}</p>
      </div>
    ))}
  </div>
  )
}
