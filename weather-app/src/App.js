import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
function App() {
  const [city,setCity]=useState('')
  const [cel,setCel]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).
    then(response=>{
      console.log(response.data.main.city)
      const kelvin = response.data.main.temp;
      const celsius = kelvin - 273.15
      setCel(`Temperature at ${city} is ${Math.round(celsius)}°C`)
  })
    
  }
  return (
    <div className="App">
      <center>
      <form onSubmit={submitHandler}>
        <h2>Weather App</h2>
        <input type='text' value={city} onChange={(e)=>setCity(()=>e.target.value)}/> <br/> <br/>
        <input type='submit' value='Get Temperature'/>
      </form>
      </center>
      {cel!=" "?<h1>{cel}</h1>:<h1>Unable To Find City</h1>}
    </div>
  );
}  

export default App;
