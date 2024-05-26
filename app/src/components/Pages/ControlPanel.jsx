import React from 'react'
import ShowFlights from '../ShowFlights'
import OptionBar from '../OptionBar'


export default function ControlPanel({flights}) {
  return (
    <div className='flex'>
        <OptionBar/>
        <ShowFlights flights={flights}/>
    </div>
  )
}
