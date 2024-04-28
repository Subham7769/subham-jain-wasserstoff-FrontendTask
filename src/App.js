import React from 'react'
import './App.css'
import EventView from './Components/EventView/EventView';
import FrontView from './Components/FrontView/FrontView';

const App = () => {
  return (
    <div className='container'>
      <FrontView/>
      {/* <EventView/> */}
    </div>
  )
}

export default App