import logo from './logo.svg';
import './App.css';
import Header from './myComponent/Header';
import Display from './myComponent/Display';
import { useState } from 'react';
function App() {
  const [songs,setSong] = useState();
  const [found,setFound] = useState(false);
  const [search,setSearch] = useState("");
  const getList = (val)=>{
    setSearch(val)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b61d186845msh6455f78ea66435bp1a0d4fjsn4f8d88cd0395',
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
      }
    };
    
    fetch('https://youtube-music1.p.rapidapi.com/v1/search?query='+val, options)
      .then(response => response.json())
      .then(response => {
        setSong(response)
        setFound(true)
      })
      .catch(err => console.error(err));
  }
  return (
    <>
      <Header getList={getList}/>
      {found ? <Display songs={songs} search={search}/> : 
      <div className='container boarder text-center my-3'>
        please enter something....!
      </div>
      }
    </>
  );
}

export default App;
