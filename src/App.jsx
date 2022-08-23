import React, { useState } from 'react';
import { Data } from './components/Data';
import { ImagenDisplay } from './components/ImagenDisplay';


export const App = () => {

  const [time, setTime] = useState()

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  const date = new Date().getHours();

  return (
    <div className='container'>
      <ImagenDisplay
        date={date}
      />
      <h1 className='current-time'>{time}</h1>

      <Data
        date={date}
      />


    </div>
  )
}
