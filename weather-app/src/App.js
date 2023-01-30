import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Search from './myComponents/Search';
import Display from './myComponents/Display';
import { useState } from 'react';

function App() {
  const [Weather,setWeather] = useState("");
  const [city,setCity] = useState("");
  const [check,setCheck] = useState(false);
  const getWeather = async (city)=>{
    setCity(city)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b61d186845msh6455f78ea66435bp1a0d4fjsn4f8d88cd0395',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
      .then(response => response.json())
      .then(response=>{
        setWeather(response)
        setCheck(true);
      })
  }
  return (
    <>
    <Header/>
    <Search getWeather={getWeather}/>
    {check && (typeof Weather=== "object")? <Display Weather={Weather} city={city}/> : 
    <>
    <div className='fw-light text-center'>Enter City Name to Display</div>
    </>
    }
    </>
  );
}

export default App;
