import { useState } from 'react'
import './App.css'
import CalendarContainer from './CalendarContainer' 

function App() {

  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
  ]

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({length: 28}, (x, i) => i + 1)

  const dayAndDate = dates.map(function(date, idx) {
    return {
      day: days[idx%7].name,
      date: dates[idx]
    };
  })

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <CalendarContainer dayAndDate={dayAndDate}/>
    </div>
  );
}

export default App
