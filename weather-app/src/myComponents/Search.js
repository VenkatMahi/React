import React, { useState } from 'react'

const Search = (props) => {
    const [city,setCity] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        props.getWeather(city);
    }
  return (
    <div className='container my-4'>
        <h4 className='text-center'>Enter City Name</h4>
      <form className="row g-3 justify-content-center" onSubmit={submit}>
        <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden">City</label>
            <input type="text" className="form-control" value={city} onChange={(e)=>{setCity(e.target.value)}} id="city" placeholder="City Name"/>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Check</button>
        </div>
       </form>
    </div>
  )
}

export default Search
