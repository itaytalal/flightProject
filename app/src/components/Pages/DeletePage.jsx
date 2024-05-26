import React from 'react'
import OptionBar from '../OptionBar'
import ShowFlights from '../ShowFlights'
import FlightDeleter from '../FlightDeleter'

export default function DeletePage({flights,deleteByID}) {
  return (
    <div className='flex'>
        <div>
            <OptionBar/><br/>
            <FlightDeleter deleteByID={deleteByID}/>
        </div>
        <div><ShowFlights flights={flights}/></div>
    </div>
  )
}
